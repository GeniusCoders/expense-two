import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpensePage from '../components/ExpensePage'
import Header from '../components/Header'
import AddPage from '../components/AddPage'
import EditPage from '../components/EditPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
     <Header/>
      <Switch>
       <Route path="/" component={ExpensePage} exact/>
       <Route path="/create" component={AddPage} />
       <Route path="/edit/:id" component={EditPage} />
       <Route path="/help" component={HelpPage} />
       <Route component={NotFoundPage} />
     </Switch>
    </div> 
  </BrowserRouter>   
)

export default AppRouter