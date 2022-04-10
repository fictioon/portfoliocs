uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec2 uOffset;
uniform vec2 uEffect;
varying vec2 vUv;

vec3 rgbShift(sampler2D textureImage, vec2 uv, vec2 offset, vec2 effect) {
  float r = texture2D(textureImage, uv + effect).r;
  float g = texture2D(textureImage, uv + (effect*0.1)).g;
  float b = texture2D(textureImage, uv + offset + (effect*0.15)).b;
  return vec3(r,g,b);
}

void main() {
  vec3 color = rgbShift(uTexture,vUv,uOffset,uEffect);

  gl_FragColor = vec4(color,uAlpha);
}