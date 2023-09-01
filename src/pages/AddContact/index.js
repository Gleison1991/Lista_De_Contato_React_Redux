import React, {useState} from 'react';
import { Section } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory} from 'react-router-dom';

export default function AddContact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [number, setNumber] = useState('');

	const contacts = useSelector((state) => state);
	const dispatch = useDispatch();
	const history = useHistory();

	const checkName = contacts.find(contact => contact.name === name && name);
	const checkEmail = contacts.find(contact => contact.email=== email && email);

	const handleSubmit = (e) => {
		e.preventDefault();

		if(!email || !name || !number) {
			return toast.warn('Por favor, preencha todos os campos');
		}

		if(checkName) {
			toast.error('Nome já existe');
		}

		if(checkEmail) {
			toast.error('Email já existe');
		}

		const data = {
			id: contacts[contacts.length - 1].id + 1,
			name,
			email,
			number,
		};

		dispatch({
			type: 'ADD_CONTACT',
			payload: data
		});

		toast.success('Contato adicionado com sucesso');
		history.push('/');
	};

	return (
		<Section>
			<h1>Criar contato</h1>

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
					
				<input
					type="submit"
					value="Criar contato" />
			</form>
		</Section>
	);
}