import { atom } from 'recoil'
import setting from '../const/setting.json'

export const hpState = atom({ key: 'hp', default: setting.hp })
export const quizNumState = atom({ key: 'quiz', default: 0 })
