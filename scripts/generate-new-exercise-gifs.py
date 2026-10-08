"""Generate original exercise diagrams. Run with Python and Pillow installed."""
from pathlib import Path
from math import sin, cos, pi, sqrt
from PIL import Image, ImageDraw, ImageFont

SIZE = 360
SCALE = 3
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/gifs/exercises'
INK = '#252c35'
BODY = '#aeb6c1'
MUSCLE = '#d3664f'
MAT = '#e7edf2'


def point(p):
    return tuple(round(v * SCALE) for v in p)


def line(draw, a, b, color=BODY, width=14):
    draw.line([point(a), point(b)], fill=INK, width=(width + 3) * SCALE)
    draw.line([point(a), point(b)], fill=color, width=width * SCALE)
    for x, y in (a, b):
        r = width / 2
        draw.ellipse(tuple(v * SCALE for v in (x-r, y-r, x+r, y+r)), fill=color, outline=INK, width=SCALE)


def ellipse(draw, bounds, color=BODY):
    draw.ellipse(tuple(round(v*SCALE) for v in bounds), fill=color, outline=INK, width=2*SCALE)


def polygon(draw, points, color):
    draw.polygon([point(p) for p in points], fill=color)
    draw.line([point(p) for p in points + [points[0]]], fill=INK, width=2*SCALE)


def canvas(title, caption):
    im = Image.new('RGB', (SIZE*SCALE, SIZE*SCALE), 'white')
    d = ImageDraw.Draw(im)
    font = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 15*SCALE)
    small = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 11*SCALE)
    d.text(point((180, 22)), title, fill=INK, font=font, anchor='mt')
    d.text(point((180, 46)), 'Demostración esquemática · vista lateral', fill='#667080', font=small, anchor='mt')
    d.rounded_rectangle(tuple(v*SCALE for v in (30, 288, 335, 299)), radius=4*SCALE, fill=MAT)
    d.text(point((180, 324)), caption, fill=INK, font=small, anchor='mt')
    return im, d


def head(d, x, y):
    ellipse(d, (x-15, y-21, x+15, y+13))
    d.line([point((x-12,y-13)),point((x+8,y-18))], fill=INK, width=3*SCALE)


def dumbbell(d, x, y):
    d.line([point((x-14,y)),point((x+14,y))], fill=INK, width=4*SCALE)
    for dx in (-16, 11):
        d.rounded_rectangle(tuple(v*SCALE for v in (x+dx,y-10,x+dx+5,y+10)), radius=2*SCALE, fill=INK)


def floor_press(t):
    lift = (1-cos(2*pi*t))/2
    im, d = canvas('Press cerrado con mancuernas', 'Codos cerca del torso · baja con control')
    # Far arm remains close to the torso; neutral wrists, separate dumbbells.
    for shift, color in ((-10, '#c5cad1'), (0, BODY)):
        shoulder = (130+shift, 254)
        elbow = (162+shift-32*lift, 277-77*lift)
        wrist = (162+shift-32*lift, 225-80*lift)
        if shift == -10:
            line(d, shoulder, elbow, color, 13)
            line(d, elbow, wrist, color, 11)
            dumbbell(d, *wrist)
    line(d, (113,260), (132,257), width=14)
    head(d, 95, 269)
    polygon(d, [(124,245),(207,248),(223,264),(210,283),(124,282)], BODY)
    polygon(d, [(204,248),(226,253),(235,272),(213,285),(200,276)], INK)
    line(d, (222,266), (267,216), width=22)
    line(d, (267,216), (293,281), width=17)
    line(d, (291,283), (314,285), width=10)
    shoulder=(130,254)
    elbow=(162-32*lift,277-77*lift)
    wrist=(162-32*lift,225-80*lift)
    line(d, shoulder, elbow, MUSCLE, 16)
    line(d, elbow, wrist, width=12)
    dumbbell(d, *wrist)
    return im


def knee(hip, heel, length=60):
    dx, dy = heel[0]-hip[0], heel[1]-hip[1]
    distance = sqrt(dx*dx+dy*dy)
    h = sqrt(max(0, length*length-distance*distance/4))
    return ((hip[0]+heel[0])/2 + dy*h/distance,
            (hip[1]+heel[1])/2 - dx*h/distance)


def heel_at(t, offset):
    # Six alternating short steps out, followed by six alternating steps back.
    steps=[240,255,270,285,270,255,240]
    phase=(t*6 + offset)%6
    index=int(phase)
    f=phase-index
    smooth=(1-cos(pi*f))/2
    return (steps[index]+(steps[index+1]-steps[index])*smooth, 281-5*sin(pi*f))


def walkout(t):
    im,d=canvas('Caminata de talones desde puente', 'Pasos cortos de ida y vuelta · cadera elevada')
    hip=(184,225)
    far=heel_at(t, .5)
    k=knee(hip, far)
    line(d, hip, k, '#c5cad1', 19)
    line(d, k, far, '#c5cad1', 15)
    line(d, far, (far[0]+18,far[1]-4), '#c5cad1', 10)
    head(d, 65, 267)
    line(d, (79,265), (99,262), width=14)
    polygon(d, [(92,252),(171,211),(191,221),(189,240),(103,281)], BODY)
    polygon(d, [(169,211),(191,218),(201,234),(186,246),(173,235)], INK)
    line(d, (102,260), (137,278), width=13)
    line(d, (137,278), (174,281), width=10)
    near=heel_at(t, 0)
    k=knee(hip, near)
    line(d, hip, k, MUSCLE, 21)
    line(d, k, near, width=16)
    line(d, near, (near[0]+18,near[1]-4), width=10)
    return im


def generate(name, render, frames=60, duration=80):
    images=[render(i/frames).resize((SIZE,SIZE), Image.Resampling.LANCZOS) for i in range(frames)]
    images[0].save(OUT/name, save_all=True, append_images=images[1:], duration=duration, loop=0, disposal=2, optimize=False)


if __name__ == '__main__':
    OUT.mkdir(parents=True, exist_ok=True)
    generate('close-grip-db-floor-press.gif', floor_press, 48, 80)
    generate('hamstring-walkout.gif', walkout, 72, 100)
