document.addEventListener('DOMContentLoaded', () => {
    const channels = [
        {
            name: 'Ciencia Cósmica',
            logo: 'logo-space.png',
            src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            category: 'Documental'
        },
        {
            name: 'Planeta Vivo',
            logo: 'logo-nature.png',
            src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            category: 'Documental'
        },
        {
            name: 'Noticias 24/7',
            logo: 'logo-news.png',
            src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            category: 'Noticias'
        },
        {
            name: 'Cine Clásico',
            logo: 'logo-retro.png',
            src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
            category: 'Películas'
        },
        {
            name: 'Ritmo Global',
            logo: 'logo-music.png',
            src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
            category: 'Música'
        },
        {
            name: 'Aventura Extrema',
            logo: 'logo-aventura.png',
            src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
            category: 'Deportes'
        },
        {
            name: 'Cocina del Mundo',
            logo: 'logo-cocina.png',
            src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
            category: 'Cocina'
        },
        {
            name: 'Motor Manía',
            logo: 'logo-motor.png',
            src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
            category: 'Automóviles'
        },
        {
            name: 'Comedia Central',
            logo: 'logo-comedia.png',
            src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
            category: 'Comedia'
        },
        // --- 50 Additional Channels ---
        { name: 'Universo TV', logo: 'logo-space.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', category: 'Documental' },
        { name: 'Naturaleza HD', logo: 'logo-nature.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', category: 'Documental' },
        { name: 'Mundo News', logo: 'logo-news.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', category: 'Noticias' },
        { name: 'Hollywood Oro', logo: 'logo-retro.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', category: 'Películas' },
        { name: 'Fiesta Latina', logo: 'logo-music.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', category: 'Música' },
        { name: 'Adrenalina TV', logo: 'logo-aventura.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', category: 'Deportes' },
        { name: 'Sabor y Sazón', logo: 'logo-cocina.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', category: 'Cocina' },
        { name: 'Máxima Velocidad', logo: 'logo-motor.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4', category: 'Automóviles' },
        { name: 'Risas y Más', logo: 'logo-comedia.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', category: 'Comedia' },
        { name: 'Explora Cosmos', logo: 'logo-space.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', category: 'Documental' },
        { name: 'Tierra Salvaje', logo: 'logo-nature.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', category: 'Documental' },
        { name: 'El Informador', logo: 'logo-news.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', category: 'Noticias' },
        { name: 'Cine de Culto', logo: 'logo-retro.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', category: 'Películas' },
        { name: 'Videoclips Top', logo: 'logo-music.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', category: 'Música' },
        { name: 'Deporte Total', logo: 'logo-aventura.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', category: 'Deportes' },
        { name: 'Recetas Fáciles', logo: 'logo-cocina.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', category: 'Cocina' },
        { name: 'Garaje TV', logo: 'logo-motor.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4', category: 'Automóviles' },
        { name: 'Stand Up Sin Fronteras', logo: 'logo-comedia.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', category: 'Comedia' },
        { name: 'Misterios del Universo', logo: 'logo-space.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', category: 'Documental' },
        { name: 'Fauna Ibérica', logo: 'logo-nature.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', category: 'Documental' },
        { name: 'Titulares Hoy', logo: 'logo-news.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', category: 'Noticias' },
        { name: 'Cinema Paradiso', logo: 'logo-retro.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', category: 'Películas' },
        { name: 'Pop Hits', logo: 'logo-music.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', category: 'Música' },
        { name: 'Fútbol Mundial', logo: 'logo-aventura.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', category: 'Deportes' },
        { name: 'Postres Divinos', logo: 'logo-cocina.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', category: 'Cocina' },
        { name: 'Supercoches', logo: 'logo-motor.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4', category: 'Automóviles' },
        { name: 'Carcajadas TV', logo: 'logo-comedia.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', category: 'Comedia' },
        { name: 'Viaje Estelar', logo: 'logo-space.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', category: 'Documental' },
        { name: 'Reino Animal', logo: 'logo-nature.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', category: 'Documental' },
        { name: 'Última Hora', logo: 'logo-news.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', category: 'Noticias' },
        { name: 'Joyas del Cine', logo: 'logo-retro.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', category: 'Películas' },
        { name: 'Rock & Pop', logo: 'logo-music.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', category: 'Música' },
        { name: 'Aventura 4x4', logo: 'logo-aventura.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', category: 'Deportes' },
        { name: 'Cocina Rápida', logo: 'logo-cocina.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', category: 'Cocina' },
        { name: 'Taller Mecánico', logo: 'logo-motor.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4', category: 'Automóviles' },
        { name: 'El Club de la Comedia', logo: 'logo-comedia.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', category: 'Comedia' },
        { name: 'Planeta Azul', logo: 'logo-nature.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', category: 'Documental' },
        { name: 'Canal de Historia', logo: 'logo-retro.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', category: 'Documental' },
        { name: 'Noticias Económicas', logo: 'logo-news.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', category: 'Noticias' },
        { name: 'Cine de Autor', logo: 'logo-retro.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', category: 'Películas' },
        { name: 'Música Clásica', logo: 'logo-music.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', category: 'Música' },
        // --- 100 Additional Channels ---
        // Category: Documental (Space) - 11 channels
        { name: 'Fronteras del Espacio', logo: 'logo-space.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', category: 'Documental' },
        { name: 'Odisea Cósmica', logo: 'logo-space.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', category: 'Documental' },
        { name: 'Documental Estelar', logo: 'logo-space.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', category: 'Documental' },
        { name: 'Más Allá de la Tierra', logo: 'logo-space.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', category: 'Documental' },
        { name: 'Crónicas Galácticas', logo: 'logo-space.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', category: 'Documental' },
        { name: 'Exploradores del Cosmos', logo: 'logo-space.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', category: 'Documental' },
        { name: 'Nebulosas TV', logo: 'logo-space.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', category: 'Documental' },
        { name: 'Supernovas', logo: 'logo-space.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', category: 'Documental' },
        { name: 'Agujeros Negros', logo: 'logo-space.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', category: 'Documental' },
        { name: 'Astrofísica Hoy', logo: 'logo-space.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', category: 'Documental' },
        { name: 'Planetas Lejanos', logo: 'logo-space.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', category: 'Documental' },

        // Category: Documental (Nature) - 11 channels
        { name: 'Eco Planeta', logo: 'logo-nature.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', category: 'Documental' },
        { name: 'Safari Global', logo: 'logo-nature.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', category: 'Documental' },
        { name: 'Secretos de la Selva', logo: 'logo-nature.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', category: 'Documental' },
        { name: 'Instinto Animal', logo: 'logo-nature.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', category: 'Documental' },
        { name: 'Ríos y Montañas', logo: 'logo-nature.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', category: 'Documental' },
        { name: 'Mundo Submarino', logo: 'logo-nature.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', category: 'Documental' },
        { name: 'Aves del Mundo', logo: 'logo-nature.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', category: 'Documental' },
        { name: 'Tierra Verde', logo: 'logo-nature.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', category: 'Documental' },
        { name: 'Clima Extremo', logo: 'logo-nature.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', category: 'Documental' },
        { name: 'Biomas', logo: 'logo-nature.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', category: 'Documental' },
        { name: 'Naturaleza Pura', logo: 'logo-nature.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', category: 'Documental' },

        // Category: Noticias - 11 channels
        { name: 'Noticiero Central', logo: 'logo-news.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', category: 'Noticias' },
        { name: 'Canal de Noticias', logo: 'logo-news.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', category: 'Noticias' },
        { name: 'Pulso Mundial', logo: 'logo-news.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', category: 'Noticias' },
        { name: 'El Mundo al Día', logo: 'logo-news.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', category: 'Noticias' },
        { name: '24h Información', logo: 'logo-news.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', category: 'Noticias' },
        { name: 'Debate Político', logo: 'logo-news.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', category: 'Noticias' },
        { name: 'Economía Global', logo: 'logo-news.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', category: 'Noticias' },
        { name: 'Internacional News', logo: 'logo-news.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', category: 'Noticias' },
        { name: 'La Voz de la Noticia', logo: 'logo-news.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', category: 'Noticias' },
        { name: 'El Diario TV', logo: 'logo-news.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', category: 'Noticias' },
        { name: 'Flash Informativo', logo: 'logo-news.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', category: 'Noticias' },

        // Category: Películas - 11 channels
        { name: 'Séptimo Arte', logo: 'logo-retro.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', category: 'Películas' },
        { name: 'Pantalla Grande', logo: 'logo-retro.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', category: 'Películas' },
        { name: 'Cine de Oro', logo: 'logo-retro.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', category: 'Películas' },
        { name: 'Estrenos TV', logo: 'logo-retro.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', category: 'Películas' },
        { name: 'Películas de Culto', logo: 'logo-retro.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', category: 'Películas' },
        { name: 'Cine de Acción', logo: 'logo-retro.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', category: 'Películas' },
        { name: 'Cine Romántico', logo: 'logo-retro.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', category: 'Películas' },
        { name: 'Cine de Terror', logo: 'logo-retro.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', category: 'Películas' },
        { name: 'Cine Sci-Fi', logo: 'logo-retro.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', category: 'Películas' },
        { name: 'Noche de Cine', logo: 'logo-retro.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', category: 'Películas' },
        { name: 'Filmoteca', logo: 'logo-retro.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', category: 'Películas' },

        // Category: Música - 11 channels
        { name: 'Canal Musical', logo: 'logo-music.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', category: 'Música' },
        { name: 'Éxitos del Momento', logo: 'logo-music.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', category: 'Música' },
        { name: 'Sonidos del Mundo', logo: 'logo-music.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', category: 'Música' },
        { name: 'Video Hits', logo: 'logo-music.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', category: 'Música' },
        { name: 'Ritmo Total', logo: 'logo-music.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', category: 'Música' },
        { name: 'Música Urbana', logo: 'logo-music.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', category: 'Música' },
        { name: 'Solo Rock', logo: 'logo-music.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', category: 'Música' },
        { name: 'Indie Music', logo: 'logo-music.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', category: 'Música' },
        { name: 'Electrónica TV', logo: 'logo-music.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', category: 'Música' },
        { name: 'Top Latino', logo: 'logo-music.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', category: 'Música' },
        { name: 'Acústicos', logo: 'logo-music.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', category: 'Música' },

        // Category: Deportes - 11 channels
        { name: 'Pasión Deportiva', logo: 'logo-aventura.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', category: 'Deportes' },
        { name: 'Arena de Campeones', logo: 'logo-aventura.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', category: 'Deportes' },
        { name: 'Objetivo Deporte', logo: 'logo-aventura.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', category: 'Deportes' },
        { name: 'Canal Deportes', logo: 'logo-aventura.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', category: 'Deportes' },
        { name: 'Acción Total', logo: 'logo-aventura.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', category: 'Deportes' },
        { name: 'Baloncesto TV', logo: 'logo-aventura.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', category: 'Deportes' },
        { name: 'Tenis Channel', logo: 'logo-aventura.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', category: 'Deportes' },
        { name: 'Mundo Fitness', logo: 'logo-aventura.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', category: 'Deportes' },
        { name: 'El Rey del Gol', logo: 'logo-aventura.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', category: 'Deportes' },
        { name: 'Combate Extremo', logo: 'logo-aventura.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', category: 'Deportes' },
        { name: 'Olimpiadas Hoy', logo: 'logo-aventura.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', category: 'Deportes' },

        // Category: Cocina - 11 channels
        { name: 'La Buena Mesa', logo: 'logo-cocina.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', category: 'Cocina' },
        { name: 'Fogones del Mundo', logo: 'logo-cocina.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', category: 'Cocina' },
        { name: 'Cocina Creativa', logo: 'logo-cocina.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', category: 'Cocina' },
        { name: 'Delicias Culinarias', logo: 'logo-cocina.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', category: 'Cocina' },
        { name: 'El Gourmet', logo: 'logo-cocina.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', category: 'Cocina' },
        { name: 'Cocina Mediterránea', logo: 'logo-cocina.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', category: 'Cocina' },
        { name: 'Sabores de Asia', logo: 'logo-cocina.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', category: 'Cocina' },
        { name: 'Parrilla y Carbón', logo: 'logo-cocina.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', category: 'Cocina' },
        { name: 'Repostería Casera', logo: 'logo-cocina.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', category: 'Cocina' },
        { name: 'Comida Callejera', logo: 'logo-cocina.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', category: 'Cocina' },
        { name: 'Cocina Vegana', logo: 'logo-cocina.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', category: 'Cocina' },

        // Category: Automóviles - 12 channels
        { name: 'Sobre Ruedas', logo: 'logo-motor.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4', category: 'Automóviles' },
        { name: 'Pasión por los Motores', logo: 'logo-motor.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4', category: 'Automóviles' },
        { name: 'Auto TV', logo: 'logo-motor.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4', category: 'Automóviles' },
        { name: 'Reyes del Asfalto', logo: 'logo-motor.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4', category: 'Automóviles' },
        { name: 'Velocidad Extrema', logo: 'logo-motor.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4', category: 'Automóviles' },
        { name: 'Motos TV', logo: 'logo-motor.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4', category: 'Automóviles' },
        { name: 'Rally Mundial', logo: 'logo-motor.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4', category: 'Automóviles' },
        { name: 'Fórmula Fans', logo: 'logo-motor.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4', category: 'Automóviles' },
        { name: 'Tuneados', logo: 'logo-motor.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4', category: 'Automóviles' },
        { name: 'Joyas sobre Ruedas', logo: 'logo-motor.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4', category: 'Automóviles' },
        { name: 'Camiones Monstruo', logo: 'logo-motor.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4', category: 'Automóviles' },
        { name: 'Ingeniería Mecánica', logo: 'logo-motor.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4', category: 'Automóviles' },

        // Category: Comedia - 11 channels
        { name: 'Risoterapia TV', logo: 'logo-comedia.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', category: 'Comedia' },
        { name: 'Estación de la Comedia', logo: 'logo-comedia.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', category: 'Comedia' },
        { name: 'Ja Ja Ja', logo: 'logo-comedia.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', category: 'Comedia' },
        { name: 'Humor sin Límites', logo: 'logo-comedia.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', category: 'Comedia' },
        { name: 'Pura Comedia', logo: 'logo-comedia.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', category: 'Comedia' },
        { name: 'Comedia Clásica', logo: 'logo-comedia.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', category: 'Comedia' },
        { name: 'Monólogos', logo: 'logo-comedia.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', category: 'Comedia' },
        { name: 'Cámara Oculta', logo: 'logo-comedia.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', category: 'Comedia' },
        { name: 'Sitcoms Clásicas', logo: 'logo-comedia.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', category: 'Comedia' },
        { name: 'Humor Amarillo', logo: 'logo-comedia.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', category: 'Comedia' },
        { name: 'Parodias TV', logo: 'logo-comedia.png', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', category: 'Comedia' }
    ];

    const channelList = document.getElementById('channel-list');
    const videoPlayer = document.getElementById('video-player');
    const videoPlaceholder = document.getElementById('video-placeholder');
    const currentChannelLogo = document.getElementById('current-channel-logo');
    const currentChannelName = document.getElementById('current-channel-name');
    const channelUpBtn = document.getElementById('channel-up-btn');
    const channelDownBtn = document.getElementById('channel-down-btn');

    let activeChannelElement = null;
    let currentChannelIndex = -1;
    let hls = new Hls();

    function setupHls() {
        if (!Hls.isSupported()) {
            console.warn('HLS is not supported by your browser.');
            return;
        }
        hls.on(Hls.Events.ERROR, function (event, data) {
            if (data.fatal) {
                switch (data.type) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                        console.error('fatal network error encountered, trying to recover', data);
                        hls.startLoad();
                        break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                        console.error('fatal media error encountered, trying to recover', data);
                        hls.recoverMediaError();
                        break;
                    default:
                        console.error('HLS fatal error, cannot recover', data);
                        hls.destroy();
                        break;
                }
            }
        });
    }

    channels.forEach((channel, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('channel-item');
        listItem.dataset.src = channel.src;

        const logo = document.createElement('img');
        logo.src = channel.logo;
        logo.alt = `${channel.name} logo`;
        logo.classList.add('channel-logo');

        const name = document.createElement('span');
        name.textContent = channel.name;
        name.classList.add('channel-name');

        listItem.appendChild(logo);
        listItem.appendChild(name);

        listItem.addEventListener('click', () => {
            currentChannelIndex = index;
            playChannel(channel, listItem);
        });

        channelList.appendChild(listItem);
    });
    
    function playChannel(channel, element) {
        // Hide placeholder
        videoPlaceholder.style.display = 'none';

        // Update video source
        videoPlayer.src = channel.src;
        videoPlayer.load();
        videoPlayer.play().catch(error => {
            console.error("Error al intentar reproducir el video:", error);
            // On mobile, autoplay might be blocked. Muting helps.
            videoPlayer.muted = true;
            videoPlayer.play();
        });

        // Update channel info bar
        currentChannelLogo.src = channel.logo;
        currentChannelLogo.style.display = 'block';
        currentChannelName.textContent = channel.name;

        // Update active state in channel list
        if (activeChannelElement) {
            activeChannelElement.classList.remove('active');
        }
        element.classList.add('active');
        activeChannelElement = element;

        // Scroll the new channel into view
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function changeChannel(direction) {
        if (channels.length === 0) return;

        // If no channel is selected, start from the first one
        if (currentChannelIndex === -1 && direction === 1) {
             currentChannelIndex = 0;
        } else if (currentChannelIndex === -1 && direction === -1) {
            currentChannelIndex = channels.length - 1;
        } else {
            currentChannelIndex = (currentChannelIndex + direction + channels.length) % channels.length;
        }
        
        const nextChannel = channels[currentChannelIndex];
        const nextChannelElement = channelList.children[currentChannelIndex];
        playChannel(nextChannel, nextChannelElement);
    }

    channelUpBtn.addEventListener('click', () => changeChannel(1));
    channelDownBtn.addEventListener('click', () => changeChannel(-1));

    setupHls();
});