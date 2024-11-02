import CreateUser from '../features/user/CreateUser';
function Home() {
  return (
    <div className='text-center py-5'>
      <h1 className='mb-5'>
        The best pizza.
        <br />
        <span style={{color:'rgb(235, 235, 48)'}}>Straight out of the oven, straight to you.</span>
      </h1>
      <CreateUser/>
    </div>
  );
}

export default Home;
