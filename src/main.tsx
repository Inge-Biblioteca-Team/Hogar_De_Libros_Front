import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
=======
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <App/>
    </QueryClientProvider>
>>>>>>> upstream/main
)
