const HeroImage = () => {
  return (
    <div className="relative">
      <img
        src="/imgs/woman-holding-salad-bowl.png"
        alt="woman holding salad bowl"
        width={1200}
      />
      <span className="absolute top-[50%] -right-4 h-8 w-auto -rotate-[10deg]">
        <img
          src="/imgs/thrive-wellness-book.png"
          alt="Thrive wellness book"
          max-height={570}
        />
      </span>
    </div>
  );
};

export default HeroImage;
