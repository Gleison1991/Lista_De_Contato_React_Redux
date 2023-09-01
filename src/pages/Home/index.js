import React from 'react';
import {Section, AddContact} from './styled';
import {useSelector, useDispatch} from 'react-redux';
import { toast } from 'react-toastify';

export default function Home() {
	const contacts = useSelector(state => state);
	const dispatch = useDispatch();

	function deleteContact(id) {
		dispatch({
			type: 'DELETE_CONTACT',
			payload: id
		});
		toast.success('Contato deletado');
	}
	return (
		<Section>
			<h1>Bem-vindo à sua lista de contatos</h1>
			<AddContact href='/add' className=''>Adicionar contato</AddContact>

			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Nome</th>
						<th>Email</th>
						<th>Número</th>
						<th>Opção</th>
					</tr>
				</thead>
				<tbody>
					{
						contacts.map((contact, id) => (
							<tr key={id}>
								<td>{id + 1}</td>
								<td>{contact.name}</td>
								<td>{contact.email}</td>
								<td>{contact.number}</td>
								<td>
									<a href={`/edit/${contact.id}`}>Editar</a>
									<button type='button' onClick={() => deleteContact(contact.id)}>Delete</button>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</Section>
	);
}