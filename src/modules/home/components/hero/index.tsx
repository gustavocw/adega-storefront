const Hero = () => {
  return (
    <div className="h-screen w-full relative">
      <img
        src="/vinhos/bgvinhos.jpg" // Caminho para a imagem na pasta public
        alt="Vinhos Background"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  )
}

export default Hero
