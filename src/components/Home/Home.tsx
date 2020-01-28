import * as React from 'react';
import {Grid, Paper, Typography} from "@material-ui/core";
import { localStorageService } from '../../app-services/loclStorageServices';

const { getValuen } = new localStorageService();

interface IProps {
}

interface IState {
    username: string | null,
}

 class Home extends React.PureComponent<IProps, IState> {
    state: IState;
    constructor(props: IProps) {
        super(props);
        this.state = {username: ''}
    }

    componentDidMount(): void {
        const username: string | null = getValuen('username');
        this.setState({username: username });
    }

     render() {
     return (
         <Grid container
               direction="column"
               justify="space-around"
               alignItems="center">
             <Paper style={{minHeight: 600,width:700, marginTop: 60, padding: 10}}>
                 <Typography variant="h3" component="h3">
                     Home
                 </Typography>
                 <h1>{this.state.username}</h1>
             </Paper>
             </Grid>
     );
   }
 }


export default Home;
