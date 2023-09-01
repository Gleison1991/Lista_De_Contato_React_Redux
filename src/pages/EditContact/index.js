import React, {useState, useEffect} from 'react';
import { Section } from './styled';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory} from 'react-router-dom';

export default function AddContact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [number, setNumber] = useState('');

	const {id} = useParams();
	const dispatch = useDispatch();
	const history = useHistory();

	const contacts = useSelector(state => state);
	const currentContact = contacts.find(contact => contact.id === parseInt(id));

	useEffect(() => {
		if(currentContact) {
			setName(currentContact.name);
			setEmail(currentContact.email);
			setNumber(currentContact.number);
		}
	}, [currentContact]);

	const checkName = contacts.find(contact => contact.name === name && name);
	const checkEmail = contacts.find(contact => contact.email=== email && email);

	const handleSubmit = (e) => {
		e.preventDefault();

		if(!email || !name || !number) {
			return toast.warn('Por favor, preencha todos os campos');
		}

		const data = {
			id: parseInt(id),
			name,
			email,
			number,
		};

		dispatch({
			type: 'EDIT_CONTACT',
			payload: data
		});

		toast.success('Contato editado com sucesso');
		history.push('/');
	};

	return (
		<Section>
			{currentContact? (
				<>
					<h1>Editar contato {parseInt(id) + 1}</h1>
					<form action="" onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder='Nome'
							value={name}
							onChange={e => setName(e.target.value)}/>
						<input 
							type="email" 
							placeholder='Email'
							value={email}
							onChange={e => setEmail(e.target.value)}/>

						<input 
							type="number"
							placeholder='Número'
							value={number}
							onChange={e => setNumber(e.target.value)}/>
						<input type="submit" value="Editar contato" />
					</form>

				</>
			): (
				<h1>Contato não existe</h1>
			)}
		</Section>
	);
}