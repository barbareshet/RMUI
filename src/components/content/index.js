import React from 'react';
import { Grid } from '@material-ui/core';
import  LeftCol  from './LeftCol';
import RightCol  from './RightCol';



const styles = {
    Paper : {
        padding : 20,
        marginBottom : 15,
        marginTop : 10
    }
}
export default props =>
    <Grid container={12}>
        <Grid item sm>
            <LeftCol styles={styles}/>
        </Grid>
        <Grid item sm>
            <RightCol styles={styles}/>
        </Grid>
    </Grid>