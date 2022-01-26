import React from 'react'

import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function CardSkeleton() {
    return (
        <Grid paddingX={2} paddingY={5}>
            <Grid container  marginBottom={3} columnSpacing={{ xs: 2, sm: 2, md: 2 }} rowSpacing={{ xs: 0, sm: 0, md: 0 }}>
                <Grid xs={12} md={12} item>
                    <Box
                        sx={{
                            bgcolor: 'transparent',
                            p: 0,
                            width: '100%',
                            height: 200,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Skeleton
                            sx={{ bgcolor: 'grey.250' }}
                            variant="rectangular"
                            width={'100%'}
                            height={200}
                            style={{ borderRadius: '4px' }}
                        />
                    </Box>
                </Grid>
            </Grid>
            <Grid container marginBottom={5} flexDirection={'row-reverse'} columnSpacing={{ xs: 2, sm: 2, md: 2 }} rowSpacing={{ xs: 3, sm: 3, md: 0 }}>
                <Grid xs={6} md={6} item >
                    <Box
                        sx={{
                            bgcolor: 'transparent',
                            p: 0,
                            width: '100%',
                            height: 0,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Skeleton
                            sx={{ bgcolor: 'grey.250' }}
                            variant="rectangular"
                            width={'100%'}
                            height={20}
                            style={{ borderRadius: '4px' }}
                        />
                    </Box>
                </Grid>
            </Grid>
            <Grid container marginBottom={5} flexDirection={'row-reverse'} columnSpacing={{ xs: 2, sm: 2, md: 2 }} rowSpacing={{ xs: 3, sm: 3, md: 0 }}>
                <Grid xs={8} md={8} item >
                    <Box
                        sx={{
                            bgcolor: 'transparent',
                            p: 0,
                            width: '100%',
                            height: 0,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Skeleton
                            sx={{ bgcolor: 'grey.250' }}
                            variant="rectangular"
                            width={'100%'}
                            height={15}
                            style={{ borderRadius: '4px' }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}
