const HomeBanner = () => {
    return (
    <div>
      {/* Background image section */}
      <div
        className='flex flex-col gap-8 p-0 m-0 w-full h-screen relative mb-8'
        style={{
          backgroundImage: `url('https://png.pngtree.com/thumb_back/fw800/background/20231230/pngtree-vector-illustration-of-natural-herb-and-spice-textures-image_13916060.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
       <div className='absolute inset-0 bg-black opacity-50'></div> {/* Overlay to darken the background */}
<div className='absolute inset-0 flex flex-col justify-center items-start px-10'>
  <h1 className='text-white font-bold text-3xl lg:text-6xl text-left'>
    Experience the convenience of sourcing <br />
    <span className='text-yellow-500'>
      top-quality spices </span>
    <br />
    in one place.
  </h1>
  <div className='text-white text-xs sm:text-sm text-left'><br />
    Let CEYLONspices be your trusted companion in exploring the rich
    <br />
    tapestry of Sri Lankan spices
  </div>
</div>

      </div>
      </div>
      );
};
 
export default HomeBanner ;