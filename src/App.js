import Condiciones from './components/Condiciones';
import './myEstilo.scss';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function App() {
    return ( <
        QueryClientProvider client = { queryClient } >
        <
        Condiciones / >

        <
        ReactQueryDevtools initialIsOpen = { false }
        /> / < /
        QueryClientProvider >
    );
}

export default App;