import type { NextPage } from 'next';

import { Card, CardHeader, Grid } from '@mui/material';

import { Layout } from '../components/layouts';
import { EntryList, NewEntry } from '../components/ui';

const Home: NextPage = () => {
    return (
        <Layout title='OpenJira - Home'>
            <Grid container spacing={ 2 } sx={{paddingTop: '8px'}}>
                <Grid item xs={ 12 } sm={ 4 }>
                    <Card sx={{height: 'calc(100vh - 100px)'}}>
                        <CardHeader title="Pendientes"/>
                        <NewEntry />
                        <EntryList status='pending'/>
                    </Card>
                </Grid>
                <Grid item xs={ 12 } sm={ 4 }>
                    <Card sx={{height: 'calc(100vh - 100px)'}}>
                        <CardHeader title="En progreso"/>
                        <EntryList status='in-progress'/>
                    </Card>
                </Grid>
                <Grid item xs={ 12 } sm={ 4 }>
                    <Card sx={{height: 'calc(100vh - 100px)'}}>
                        <CardHeader title="Completadas"/>
                        <EntryList status='finished'/>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default Home