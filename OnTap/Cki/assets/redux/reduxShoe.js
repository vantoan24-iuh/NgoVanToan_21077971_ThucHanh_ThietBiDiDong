import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://6757c60cc0a427baf94dbd73.mockapi.io/demo/xu';

export const fetchShoe = createAsyncThunk('shoe/fetchShoe',
    async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    }
);

// delete shoe
export const deleteShoe = createAsyncThunk('shoe/deleteShoe',
    async (id) => {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        return id;
    }
);
//add shoe
export const addShoe = createAsyncThunk('shoe/addShoe', async (newShoe) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newShoe),
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Failed to add shoe');
    }
});

//edit shoe
export const editShoe = createAsyncThunk('shoe/editShoe', async (shoe) => {
    const response = await fetch(`${API_URL}/${shoe.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(shoe),
    });
});

const shoeSlice = createSlice({
    name: 'shoe',
    initialState: {
        shoe: [],
        status: 'idle',
        error: null

    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchShoe.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(fetchShoe.fulfilled, (state, { payload }) => {
                state.status = 'success';
                state.shoe = payload;
            })
            .addCase(fetchShoe.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
        builder.addCase(deleteShoe.fulfilled, (state, { payload }) => {
            state.shoe = state.shoe.filter((item) => item.id !== payload);
        });
        builder.addCase(addShoe.fulfilled, (state, { payload }) => {
            state.shoe.push(payload);
        });
        builder.addCase(editShoe.fulfilled, (state, { payload }) => {
            const index = state.shoe.findIndex((item) => item.id === payload.id);
            if (index !== -1) {
                state.shoe[index] = payload;
            }
        });
    }
});
export default shoeSlice.reducer;