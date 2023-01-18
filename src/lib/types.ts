export type PersonalInfo = {
  name: string,
  email: string,
  phone: string
}

export type Plan = {
  kind: 'arcade' | 'advanced' | 'pro',
  duration: 'monthly' | 'yearly'
}

export type AddOns = {
  onlineService: boolean,
  largerStorage: boolean,
  customizableProfile: boolean 
}
