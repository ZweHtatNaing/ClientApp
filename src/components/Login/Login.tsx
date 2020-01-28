import * as React from 'react';
import {Grid, Button, TextField, Paper, Typography} from '@material-ui/core';
import {userServices} from '../../app-services/user-services';
import { localStorageService } from '../../app-services/loclStorageServices';

const {login } = new userServices();
const { clearToken } = new localStorageService();

interface IProps {
}

interface IState  {
    username: string,
    password: string,
}

 class Login extends React.PureComponent<IProps, IState> {
     state: IState;
     constructor(props: IProps) {
         super(props);
         this.state = {
             username: '',
             password: ''
         };
         this.handelChange = this.handelChange.bind(this);
         this.onSave = this.onSave.bind(this);
     }

     componentDidMount(): void {
         clearToken();
     }

     handelChange(e: React.ChangeEvent<HTMLInputElement>){
         const { name, value } = e.currentTarget;
         this.setState({[name]: value} as Pick<IState, keyof IState>);

     };

     onSave(){
         const formDate = {
             username: this.state.username,
             password: this.state.password,
         };
         login(formDate).then(respond => {
             if(respond !== undefined && respond.code === true){
                 window.location.href = "/Home"
             }
         });

     };

     render() {
         return (
             <Grid container
                   direction="column"
                   justify="space-around"
                   alignItems="center">
                 <Paper style={{minHeight: 400,width:450, marginTop: 60, padding: 10}}>
                     <Typography variant="h3" component="h3">
                         Login
                     </Typography>
                     <Grid container
                           direction="column"
                           justify="center"
                           alignItems="stretch"
                           spacing={3}>
                         <Grid item xs={12}>
                             <TextField
                                 style={{width: '100%'}}
                                 error={this.state.password === undefined || this.state.password === ""}
                                 label="Email Address"
                                 value={this.state.username}
                                 name={'username'}
                                 onChange={this.handelChange}
                                 margin="dense"
                                 required
                             />
                         </Grid>
                         <Grid item xs={12}>
                             <TextField
                                 style={{width: '100%'}}
                                 type={'password'}
                                 error={this.state.password === undefined || this.state.password === ""}
                                 label="Password"
                                 value={this.state.password}
                                 name={'password'}
                                 onChange={this.handelChange}
                                 margin="dense"
                                 required
                             />
                         </Grid>
                     </Grid>
                     <Button variant="outlined" color="primary" style={{marginTop: 10}} onClick={this.onSave}>
                         Login
                     </Button>
                 </Paper>
             </Grid>

         );
     }
 }


export default Login;
