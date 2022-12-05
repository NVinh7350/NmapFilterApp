import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const RNFS = require('react-native-fs')
const NmapInputSlice = createSlice({
    name : 'NmapInput',
    initialState:{
        path: RNFS.DocumentDirectoryPath + '/scan_google.txt',
        nmapContent : '',
        statusReadFile : 'idle',
    },
    reducers: {
        setPath : (state, action ) => {
            state.path = action.payload
        },
        setStatusReadFile : (state, action) => {
            state.statusReadFile = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(readFile.pending, (state,action) => {
            state.statusReadFile = 'loading'
        })
        builder.addCase(readFile.fulfilled, (state, action ) => {
            state.statusReadFile = 'success'
            state.nmapContent = action.payload
        })
        builder.addCase(readFile.rejected, (state, action) => {
            state.statusReadFile = 'error'
            state.nmapContent = action.payload
        })
    }
})
export default NmapInputSlice;
export const readFile = createAsyncThunk('NmapInput/readFile', 
async(path) => {
    const fileContent = await RNFS.readFile(path, 'utf8');
    return fileContent;
}
)