namespace LuftfahrtClasses{

   export let Insects: Insect[] = [];
   export let HotAirBalloons: HotAirBalloon[] = [];
   export let Paragliders: Paraglider[] = [];

 
 export function createInsects(numInsects: number): void {
    const maxInsects = 5; // Maximale Anzahl von Insekten im Bild
  
    for (let i = 0; i < numInsects && Insects.length < maxInsects; i++) {
      let insect: Insect = new Insect();
      Insects.push(insect);
    }
  }
  export function createHotairballoons(numHotairballoons: number): void {
    const maxBalloons = 4; // Maximale Anzahl von Balloons im Bild
  
    for (let i = 0; i < numHotairballoons && Insects.length < maxBalloons; i++) {
      let hotairballoon: HotAirBalloon = new HotAirBalloon();
      HotAirBalloons.push(hotairballoon);
    }
}
export function createParagliders(numParagliders: number): void {
  const maxBalloons = 4; // Maximale Anzahl von Balloons im Bild

  for (let i = 0; i < numParagliders && Paragliders.length < maxBalloons; i++) {
    let paraglider: Paraglider = new Paraglider();
    HotAirBalloons.push(paraglider);
  }
}



