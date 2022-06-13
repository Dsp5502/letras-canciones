import { useState } from 'react';
import useLetras from '../hooks/useLetras';

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    artista: '',
    cancion: '',
  });
  const { setAlerta, busquedaLetras } = useLetras();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busqueda).includes('')) {
      setAlerta('Coloca nombrar el artista y la canción');
      return;
    }
    busquedaLetras(busqueda);
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Busca por Artistas y Canción</legend>
      <div className='form-grid'>
        <div>
          <label htmlFor=''>Artista</label>
          <input
            type='text'
            name='artista'
            placeholder='Nombre Artista'
            value={busqueda.artista}
            onChange={(e) =>
              setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor=''>Canción</label>
          <input
            type='text'
            name='cancion'
            placeholder='Nombre Canción'
            value={busqueda.cancion}
            onChange={(e) =>
              setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <input type='submit' value='Buscar' />
      </div>
    </form>
  );
};

export default Formulario;
