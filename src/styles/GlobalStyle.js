import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        font-family: Arial, Helvetica, sans-serif;
        padding: 0;
        margin: 0;
        text-decoration: none;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 300px;
        padding: 14px;
        margin: 22px 0 0 0;
        border: 1px solid gray;

        input {
            margin: 11px 0 0 0;
            padding: 11px;
        }

        button {
            margin-top: 14px;
            padding: 11px 0;
        }
    }

    table {
        border: 1px solid black;
        border-collapse: collapse;
        margin-top: 30px;
        width: 900px;

        thead {
            background-color: gray;
            
            th {
                padding: 11px;
                border: 1px solid black;
            }
        }
        
        tbody {
            td {
                padding: 11px;
                border: 1px solid black;

                a {
                    background-color: blue;
                    color: white;
                    padding: 6px;
                    margin-right: 11px;
                }

                button {
                    background-color: red;
                    color: white;
                    padding: 6px;
                    margin-right: 11px;
                    border: none;
                    cursor: pointer;
                    font-size: 1rem;
                }
            }
        }
    }
`;