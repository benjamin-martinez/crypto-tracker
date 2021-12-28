export const getWidth = (screenWidth) => {
    if( screenWidth > 900) return 520;
    if( screenWidth > 450) return 312;
    return 234;
  }

export const getHeight = (screenWidth) => {
    if( screenWidth > 900) return 220;
    if( screenWidth > 450) return 132;
    return 132;
  }