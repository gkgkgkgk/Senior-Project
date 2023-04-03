import opensimplex

class Noise:
    def __init__(self, seed=None):
        if seed == None:
            opensimplex.random_seed()
        else:
            opensimplex.seed(seed)

    def get_noise(self, x, y, frequency, octaves=16):
        total = opensimplex.noise2(x*frequency, y*frequency)

        maxAmp = 1
        amp = 1
        persistence = 0.5
        f = frequency
        lacunarity = 2
        for _ in range(octaves):
            f *= lacunarity
            total += opensimplex.noise2(x * f, y * f) * amp
            maxAmp += amp
            amp *= persistence

        total /= maxAmp

        return total