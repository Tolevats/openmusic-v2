<template>
    <div class="add-album">
        <h2 class="form-title">Add a New Album</h2>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="artist">Artist</label>
                <input id="artist" v-model="formData.artist" placeholder="Artist" required />
            </div>
            <div class="form-group">
                <label for="album">Album</label>
                <input id="album" v-model="formData.album" placeholder="Album" required />
            </div>
            <div class="form-group">
                <label for="image">Cover Image URL</label>
                <input id="image" v-model="formData.image" placeholder="Cover Image URL" required />
            </div>
            <div class="form-group">
                <label for="genre">Genre</label>
                <select id="genre" v-model="formData.genre" required>
                    <option disabled value="">Select Genre</option>
                    <option v-for="category in categories" :key="category" :value="category">
                        {{ category }}
                    </option>
                </select>
            </div>
            <div class="button-container">
                <button type="submit" class="submit-btn">Add Album</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'album-component',
    props: {
        categories: Array,
    },
    data() {
        return {
            formData: {
                artist: "",
                album: "",
                image: "",
                genre: "",
            },
        };
    },
    // computed: {},
    methods: {
        submitForm() {
            this.$emit("add-album", this.formData);
            // Reset the form
            this.formData = {
                artist: "",
                album: "", 
                image: "",
                genre: "",
            };
        },
    },
};
</script>

<style scoped>
.add-album {
    margin-top: 2em;
    text-align: center;
}
.form-title {
    color: #333;
}
.add-album form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
}
.form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.form-group label {
    font-size: 1rem;
    margin-bottom: 5px;
    color: #333;
}
input, select {
    width: 100%;
    padding: 10px;
    font-size: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}
button.submit-btn {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    background-color: #1e90ff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
}
button.submit-btn:hover {
    background-color: #0056b3;
}

/* Responsive Styles */
@media (min-width: 768px) {
    .add-album form {
        flex-wrap: wrap;
        display: grid;
        grid-template-columns: repeat(4, 1fr)/* (4, 3fr) */;
        gap: 20px;
    }
    .form-group {
        width: 100%;
    }
    input, select {
        font-size: 0.8rem;
    }
    .button-container {
        grid-column-start: 2;
        grid-column-end: 4;
        display: flex;
        justify-content: center; 
        align-items: center;
    }
}
</style>