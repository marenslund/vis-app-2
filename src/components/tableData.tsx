import '../style/tableData.style.css'
import React from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import tracks from '../data.json';

interface tableDataProps {
    showTopTen: boolean
}

export const TableData = ({ showTopTen }:tableDataProps) => {
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
                        <TableCell align="right" className={'table-cell-header'}>Artist</TableCell>
                        <TableCell align="right" className={'table-cell-header'}>Album</TableCell>
                        <TableCell align="right" className={'table-cell-header'}>Tittel</TableCell>
                        <TableCell align="right" className={'table-cell-header'}>Sjanger</TableCell>
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
                            <TableCell align={'right'} className={'table-cell'}>{track.artist}</TableCell>
                            <TableCell align={'right'} className={'table-cell'}>{track.album}</TableCell>
                            <TableCell align={'right'} className={'table-cell'}>{track.track_name}</TableCell>
                            <TableCell align={'right'} className={'table-cell'}>{track.genre}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}