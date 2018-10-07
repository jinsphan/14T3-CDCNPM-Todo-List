import Snap from 'snapsvg-cjs';

export default function animateSvg(beeName, bee) {
  const strGradient = 'l(0,1,0,0)transparent-#fff-transparent';
  const gradient = bee.gradient(strGradient);
  const g = bee.g();

  const image = g.image(require(`../images/${beeName}.png`));
  image.attr('id', beeName);

  // the length of the animation and the easing
  const lengthOfAnimation = 10000;
  const easing = mina.linear;
  let pathString;

  // The black dashed bee path
  switch (beeName) {
    case 'bee-1':
      pathString = 'M946.07, 40.19c-49.56-26.28-70, 38.55-127.91, 33.59s-61.92-39.67-94.84-47.31S670.18, 25.46, 598.2, 49, 514-10,547, 3.51s10.35, 38.9, 0, 49.92-22.81, 30.15-57.31, 20.36S432, 19.49, 370.28, 29s-49-18.1-125.08-10.5-63, 65.58-62.71, 67.9, 28.67, 15.06, 37.65, 7.52, 15-16, 5-37-49.83-30.43-79-30.43S33.48, 64.61, 2, 3.51';
      break;

    case 'bee-2':
      pathString = 'M 500 -400 C 0 100 300 0 300 100  C 100 400 100 400 100 400';
      break;


    case 'bee-3':
      pathString = 'M132.2,459.8c-35-23.2-61.3-58.3-77.5-97s-22.9-81-23.6-123c-0.3-20.4,0.8-41.2,7.4-60.5c13-38.2,45.2-66.1,68.3-99.3c42.3-60.7,82.8-42.4,27.1-211.8c-13.1-35.3-34.5-66.7-155.7-197.7c-13.5-19.7-26.9-39.4-40.4-59.1';
      break;

    case 'bee-4':
      pathString = 'M776.8,556.8c30.1-28.4,66.8-48.6,101.2-71.5 c34.4-22.9,67.9-49.9,86.9-86.7c18.3-35.6,21.4-77.7,13.9-117c-7.5-39.3-24.9-76.1-45.7-110.3c-42.3-69.6-99.2-130.2-166-176.7 c-49.5-34.5-107.9-65.7-129.3-122c-9.2-24.3-10.3-50.8-10.2-76.8c0.1-12.9,3-29.1,15.6-32';
      break;
    default:
      pathString = 'M776.8,556.8c30.1-28.4,66.8-48.6,101.2-71.5 c34.4-22.9,67.9-49.9,86.9-86.7c18.3-35.6,21.4-77.7,13.9-117c-7.5-39.3-24.9-76.1-45.7-110.3c-42.3-69.6-99.2-130.2-166-176.7 c-49.5-34.5-107.9-65.7-129.3-122c-9.2-24.3-10.3-50.8-10.2-76.8c0.1-12.9,3-29.1,15.6-32';
  }

  const beePath = bee.path(pathString)
    .attr({
      id: 'beeSquiggle',
      fill: 'none',
      strokeWidth: '4',
      stroke: '#000',
      strokeMiterLimit: '10',
      strokeDashOffset: '0',
      strokeLinecap: 'round',
    });

  // the length of the bee path
  const beePathLength = beePath.getTotalLength();

  // Mask Path (invisible - used for the dashed effect on the bee path)
  const maskedPath = bee.path(pathString).attr({
    id: 'maskedPath',
    fill: 'none',
    strokeWidth: '4',
    stroke: '#000',
    strokeDashOffset: '2000',
  });


  function infRotate(bees) {
    // animate the masked path
    maskedPath.attr({
      stroke: gradient,
      strokeLinecap: 'round',
      strokeWidth: 1, // corresponds to width of bee path
      fill: 'none',
      'stroke-dasharray': `${200} ${beePathLength}`,
      'stroke-dashoffset': 200,
    }).animate({ 'stroke-dashoffset': beePathLength + 200 }, lengthOfAnimation, easing);

    // Animate bee path drawing
    beePath.attr({
      stroke: '#fff',
      strokeWidth: 4,
      fill: 'none',
      // Draw the path
      'stroke-dasharray': '2 6 2 6',
      'stroke-dashoffset': beePathLength,

    }).animate({ 'stroke-dashoffset': beePathLength + 200 }, lengthOfAnimation, easing, infRotate.bind(null, bees));


    // add the masking
    beePath.attr({
      mask: maskedPath,
    });

    // Animate the bee along the path
    setTimeout(() => {
      Snap.animate(beePathLength, 0, (value) => {
        const movePoint = beePath.getPointAtLength(value);
        image.attr('transform', `translate(${movePoint.x - 10},${movePoint.y - 30})`); // translate along path via x & y attributes
      }, lengthOfAnimation, easing);
    });// end of setTimeout function
  }

  infRotate(bee);
}
