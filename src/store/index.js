import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: {
      Rock: [
        { id: 1, artist: 'The Beatles', category: 'Rock', album: 'Abbey Road', image: 'https://ia904708.us.archive.org/8/items/mbid-d6010be3-98f8-422c-a6c9-787e2e491e58/mbid-d6010be3-98f8-422c-a6c9-787e2e491e58-1229601191_thumb250.jpg' },
        { id: 2, artist: "Pink Floyd", category: "Rock", album: "The Dark Side of the Moon", image: "https://ia904502.us.archive.org/0/items/mbid-956fbc58-362d-43b8-b880-3779e0508559/mbid-956fbc58-362d-43b8-b880-3779e0508559-34025419985_thumb250.jpg" },
        { id: 3, artist: "Led Zeppelin", category: "Rock", album: "Led Zeppelin IV", image: "https://ia801400.us.archive.org/8/items/mbid-d204c2a6-665a-35ef-9b7c-799df194dea1/mbid-d204c2a6-665a-35ef-9b7c-799df194dea1-1509252491_thumb250.jpg" },
        { id: 4, artist: "Queen", category: "Rock", album: "A Night at the Opera", image: "https://ia802905.us.archive.org/3/items/mbid-90d2e40a-eee0-4290-aa0a-a5ae3683ea2f/mbid-90d2e40a-eee0-4290-aa0a-a5ae3683ea2f-2812830852_thumb250.jpg" },
        { id: 5, artist: "Nirvana", category: "Rock", album: "Nevermind", image: "https://ia802300.us.archive.org/22/items/mbid-c771f7fc-9e62-4349-a2e3-ceaf7122bf5b/mbid-c771f7fc-9e62-4349-a2e3-ceaf7122bf5b-30501372565_thumb250.jpg" },
      ],
      Pop: [
        { id: 6, artist: "Michael Jackson", category: "pop", album: "Thriller", image: "https://ia903102.us.archive.org/26/items/mbid-e1b94ba6-c63c-4c2d-8928-9d1a525b7000/mbid-e1b94ba6-c63c-4c2d-8928-9d1a525b7000-22018478497_thumb250.jpg" },
        { id: 7, artist: "Madonna", category: "pop", album: "Like a Virgin", image: "https://ia601200.us.archive.org/34/items/mbid-ada5cb98-7314-4ea3-b642-e859a066b58c/mbid-ada5cb98-7314-4ea3-b642-e859a066b58c-11941871336_thumb250.jpg" },
        { id: 8, artist: "Taylor Swift", category: "pop", album: "1989", image: "https://ia801606.us.archive.org/20/items/mbid-d5cb50d8-8897-4029-b9b3-32806df7e06d/mbid-d5cb50d8-8897-4029-b9b3-32806df7e06d-8650012131_thumb250.jpg" },
        { id: 9, artist: "Adele", category: "pop", album: "21", image: "https://ia802301.us.archive.org/2/items/mbid-d0a60bc8-b4e9-4f1c-b9b5-c84c284493c4/mbid-d0a60bc8-b4e9-4f1c-b9b5-c84c284493c4-34029007881_thumb250.jpg" },
        { id: 10, artist: "Britney Spears", category: "pop", album: "Oops!... I Did It Again", image: "https://ia801601.us.archive.org/18/items/mbid-8ef0eb85-4e3d-4d5b-9c45-8d157fc32d34/mbid-8ef0eb85-4e3d-4d5b-9c45-8d157fc32d34-39412866933_thumb250.jpg" },
      ],
      Rap: [
        { id: 11, artist: "2Pac", category: "Rap", album: "All Eyez on Me", image: "https://ia601306.us.archive.org/14/items/mbid-f5e7ddad-e38e-4621-9173-6bad2f126c33/mbid-f5e7ddad-e38e-4621-9173-6bad2f126c33-6778328467_thumb250.jpg" },
        { id: 12, artist: "Kendrick Lamar", category: "Rap", album: "DAMN.", image: "https://ia803102.us.archive.org/18/items/mbid-503c4a0f-97b9-4d6b-9a27-52a7f6b21cc9/mbid-503c4a0f-97b9-4d6b-9a27-52a7f6b21cc9-20352559490_thumb250.jpg" },
        { id: 13, artist: "Eminem", category: "Rap", album: "The Eminem Show", image: "https://ia601804.us.archive.org/23/items/mbid-042e3733-608b-44f8-8976-a5a7fd537d2b/mbid-042e3733-608b-44f8-8976-a5a7fd537d2b-33907879386_thumb250.jpg" },
        { id: 14, artist: "Jay-Z", category: "Rap", album: "The Blueprint", image: "https://ia600600.us.archive.org/27/items/mbid-0bade5d5-7425-4281-b3c1-e7ef298380b4/mbid-0bade5d5-7425-4281-b3c1-e7ef298380b4-39651835119_thumb250.jpg" },
        { id: 15, artist: "Nas", category: "Rap", album: "Illmatic", image: "https://ia801202.us.archive.org/28/items/mbid-f00af81c-9249-49d0-b3f5-8b6725bd1900/mbid-f00af81c-9249-49d0-b3f5-8b6725bd1900-28008351580_thumb250.jpg" },
      ],
      Reggae: [
        { id: 16, artist: "Bob Marley", category: "reggae", album: "Legend", image: "https://ia803101.us.archive.org/26/items/mbid-c7f4aa7a-e263-4c57-87f0-34a11f90802a/mbid-c7f4aa7a-e263-4c57-87f0-34a11f90802a-24608585663_thumb250.jpg" },
        { id: 17, artist: "Peter Tosh", category: "reggae", album: "Legalize It", image: "https://ia902909.us.archive.org/20/items/mbid-e9d52ec5-6fe5-4ff1-a253-aac5327ed196/mbid-e9d52ec5-6fe5-4ff1-a253-aac5327ed196-3057541324_thumb250.jpg" },
        { id: 18, artist: "Burning Spear", category: "reggae", album: "Marcus Garvey", image: "https://ia801303.us.archive.org/10/items/mbid-a8fb30e4-3b0d-4eca-a742-a7415141c35d/mbid-a8fb30e4-3b0d-4eca-a742-a7415141c35d-11940127494_thumb250.jpg" },
        { id: 19, artist: "Toots & the Maytals", category: "reggae", album: "Funky Kingston", image: "https://ia800507.us.archive.org/9/items/mbid-00b2740b-1261-4f48-b663-1e9a2295a950/mbid-00b2740b-1261-4f48-b663-1e9a2295a950-6764937624_thumb250.jpg" },
        { id: 20, artist: "Jimmy Cliff", category: "reggae", album: "The Harder They Come", image: "https://ia601408.us.archive.org/30/items/mbid-572a8942-c468-46c2-a6b5-156875b4cde7/mbid-572a8942-c468-46c2-a6b5-156875b4cde7-36330326569_thumb250.jpg" },
      ],
      Indie: [
        { id: 21, artist: "Arctic Monkeys", category: "indie", album: "AM", image: "https://ia800102.us.archive.org/6/items/mbid-c7858e6b-9232-4c01-a703-35e60d3f7ec3/mbid-c7858e6b-9232-4c01-a703-35e60d3f7ec3-11863856066_thumb250.jpg" },
        { id: 22, artist: "The Strokes", category: "indie", album: "Is This It", image: "https://ia801601.us.archive.org/7/items/mbid-5fd728bf-f69a-4c45-b68a-4fb30898bb00/mbid-5fd728bf-f69a-4c45-b68a-4fb30898bb00-39829937702_thumb250.jpg" },
        { id: 23, artist: "Vampire Weekend", category: "indie", album: "Modern Vampires of the City", image: "https://ia803202.us.archive.org/27/items/mbid-4283db24-4ab4-4f24-91c6-57e7ac343ea2/mbid-4283db24-4ab4-4f24-91c6-57e7ac343ea2-4108775682_thumb250.jpg" },
        { id: 24, artist: "Tame Impala", category: "indie", album: "Currents", image: "https://ia800203.us.archive.org/31/items/mbid-8e7746ca-7832-41b2-a731-de5b0010f37d/mbid-8e7746ca-7832-41b2-a731-de5b0010f37d-13249592911_thumb250.jpg" },
        { id: 25, artist: "The Shins", category: "indie", album: "Chutes Too Narrow", image: "https://ia801609.us.archive.org/16/items/mbid-735e9638-b555-49f5-b536-01ce8df1dbeb/mbid-735e9638-b555-49f5-b536-01ce8df1dbeb-2324822874_thumb250.jpg" }
      ],
    }
  },
  mutations: {
    addVinyl(state, vinyl) {
      state.vinyls.push(vinyl);
    }
  },
  getters: {
    totalVinyls(state) {
      return Object.values(state.categories).flat().length;
    },
    vinylsByCategory(state) {
      return Object.fromEntries(
        Object.entries(state.categories).map(([key, value]) => [key, value.length])
      );
    }
  }
});
