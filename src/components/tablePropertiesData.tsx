import '../style/tableData.style.css'
import React from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import tracks from '../data.json';

interface tablePropertiesDataProps {
    showTopTen: boolean
    propertyType: string
}

export const TablePropertiesData = ({ showTopTen, propertyType }:tablePropertiesDataProps) => {
    let trackArray = tracks;
     if(showTopTen) {
         trackArray = trackArray.slice(0, 10);
     }

    return (
        <TableContainer className={'table-container'} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={'table-cell-header'}>#</TableCell>
                        <TableCell align="right" className={'table-cell-header'}>Tittel</TableCell>
                        { propertyType === 'mood' &&
                            <>
                                <TableCell align="right" className={'table-cell-header'}>Dansbarhet</TableCell>
                                <TableCell align="right" className={'table-cell-header'}>Valens</TableCell>
                                <TableCell align="right" className={'table-cell-header'}>Energi</TableCell>
                                <TableCell align="right" className={'table-cell-header'}>Tempo</TableCell>
                            </>
                        }
                        { propertyType === 'properties' &&
                            <>
                                <TableCell align="right" className={'table-cell-header'}>Lydstyrke</TableCell>
                                <TableCell align="right" className={'table-cell-header'}>Talelighet</TableCell>
                                <TableCell align="right" className={'table-cell-header'}>Instrumentalitet</TableCell>
                            </>
                        }
                        { propertyType === 'context' &&
                            <>
                                <TableCell align="right" className={'table-cell-header'}>Livlighet</TableCell>
                                <TableCell align="right" className={'table-cell-header'}>Akustikk</TableCell>
                            </>
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {trackArray.map((track) => (
                        <TableRow
                            key={track.data_id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component={'th'} scope={'row'} className={'table-cell'}>
                                {Number(track.data_id) + 1}
                            </TableCell>
                            <TableCell align={'right'} className={'table-cell'}>{track.track_name}</TableCell>
                            { propertyType === 'mood' &&
                                <>
                                    <TableCell align={'right'} className={'table-cell'}>{track.danceability}</TableCell>
                                    <TableCell align={'right'} className={'table-cell'}>{track.valence}</TableCell>
                                    <TableCell align={'right'} className={'table-cell'}>{track.energy}</TableCell>
                                    <TableCell align={'right'} className={'table-cell'}>{track.tempo}</TableCell>
                                </>
                            }
                            { propertyType === 'properties' &&
                                <>
                                    <TableCell align={'right'} className={'table-cell'}>{track.loudness}</TableCell>
                                    <TableCell align={'right'} className={'table-cell'}>{track.speechiness}</TableCell>
                                    <TableCell align={'right'} className={'table-cell'}>{track.instrumentalness}</TableCell>
                                 </>
                            }
                            { propertyType === 'context' &&
                                <>
                                    <TableCell align={'right'} className={'table-cell'}>{track.liveness}</TableCell>
                                    <TableCell align={'right'} className={'table-cell'}>{track.acousticness}</TableCell>
                                </>
                            }

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}