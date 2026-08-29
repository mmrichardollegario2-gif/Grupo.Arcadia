const points = [
  [0,238],[35,225],[70,232],[105,198],[140,210],[175,176],[210,190],
  [245,148],[280,166],[315,130],[350,142],[385,108],[420,124],
  [455,88],[490,102],[525,72],[560,92],[595,55],[630,70],[665,38],[700,48]
];

const line = document.getElementById("linePath");
const area = document.getElementById("areaPath");
const dot = document.getElementById("lastDot");

let d = `M ${points[0][0]} ${points[0][1]}`;
for (let i=1;i<points.length;i++){
  const [x0,y0] = points[i-1], [x1,y1] = points[i];
  const cx = (x0+x1)/2;
  d += ` Q ${cx} ${y0} ${x1} ${y1}`;
}
line.setAttribute("d", d);
area.setAttribute("d", `${d} L 700 300 L 0 300 Z`);
dot.setAttribute("cx", points[points.length-1][0]);
dot.setAttribute("cy", points[points.length-1][1]);

const totalLength = line.getTotalLength();
line.style.strokeDasharray = totalLength;
line.style.strokeDashoffset = totalLength;
requestAnimationFrame(() => {
  line.style.transition = "stroke-dashoffset 1.8s cubic-bezier(.2,.8,.2,1)";
  line.style.strokeDashoffset = "0";
});

document.getElementById("year").textContent = new Date().getFullYear();
