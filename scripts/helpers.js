import { LYRICS_URL } from './constants.js'

export function songUrl(id) {
  return `http://113.96.101.12/amobile.music.tc.qq.com/C400${id}.m4a?guid=7207486993&vkey=7F058F8BD8A55DFABE822A7D75271AE45BF148798587FA1EA81EEE9D73AE2D46865472D6791FEE5C6F3426643FC2A278F150D1DC52C6A2E1&uin=0&fromtag=38`
  
}

export function lyricsUrl(songid) {
  return `${LYRICS_URL}?id=${songid}`
}

export function albumCoverUrl(id) {
  return `https://y.gtimg.cn/music/photo_new/T002R150x150M000${id}.jpg`
}

