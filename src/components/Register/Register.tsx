import * as React from 'react';
import {Grid, Button, TextField, Paper, Typography} from '@material-ui/core';
import {userServices} from '../../app-services/user-services';

const {createUser } = new userServices();

interface IProps {
}

interface IState  {
    username: string,
    password: string,
    fullName: string
    form_dirty: string | boolean;
}

 class Register extends React.PureComponent<IProps, IState> {
     state: IState;
     constructor(props: IProps) {
         super(props);
         this.state = {
             username: '',
             password: '',
             fullName: '',
             form_dirty: false
         };
         this.handelChange = this.handelChange.bind(this);
         this.onSave = this.onSave.bind(this);
     }

     handelChange(e: React.ChangeEvent<HTMLInputElement>){
         const { name, value } = e.currentTarget;
         this.setState({[name]: value} as Pick<IState, keyof IState>);

     };

     onSave(){
         const formDate = {
             username: this.state.username,
             password: this.state.password,
             fullName: this.state.fullName,
         };
         createUser(formDate).then(respond => {
             if(respond !== undefined && respond.code === true){
                 window.location.href = "/Login"
             }
            console.log(respond);
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
                 Register
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
                 <Grid item xs={12}>
                     <TextField
                         style={{width: '100%'}}
                         error={this.state.fullName === undefined || this.state.password === ""}
                         label="Full Name"
                         value={this.state.fullName}
                         name={'fullName'}
                         onChange={this.handelChange}
                         margin="dense"
                         required
                     />
                 </Grid>
             </Grid>
             <Button variant="outlined" color="primary" style={{marginTop: 10}} onClick={this.onSave}>
                 Register
             </Button>
         </Paper>
         </Grid>

     );
   }
 }

export default Register;
