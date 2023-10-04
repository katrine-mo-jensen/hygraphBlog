import './App.css'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from './layout/Layout';
import { HomePage } from './pages/HomePage';
import { BlogPost } from './pages/BlogPost';

function App() {
  
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/blogpost' element={<BlogPost/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      
    </QueryClientProvider>
  )
}

export default App
