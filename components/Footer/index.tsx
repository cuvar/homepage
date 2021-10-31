export default function Navbar() {
  return (
    <footer className='bg-gray-800 py-8'>
      <div className='flex justify-center mb-8'>
        {['Imprint', 'Privacy'].map((item, index) => (
          <a
            href={'/' + item.toLowerCase()}
            key={index}
            className='text-beigewhite hover:underline mx-2 text-lg active:text-byzantium'>
            {item}
          </a>
        ))}
      </div>
      <p className='text-center text-beigewhite'>&copy; 2021 Copyright cuvar</p>
    </footer>
  );
}
