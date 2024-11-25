import Card from './Card'
import menu from '../menu'

const Specials = () => {
  return (
    <section className='specials'>
      <div className='container'>
        <div className='specials-header'>
          <h1>This weeks specials</h1>
          <button className='btn'>Online Menu</button>
        </div>
        <div className='specials-cards'>
          {menu.map((menu) => (
            <Card key={menu.id} menu={menu} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specials
