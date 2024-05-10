export interface IInvalidCard {
  name: string;
  desc: string;
  id: number;
  isFood: boolean;
  isChild: boolean;
  isBlind: boolean;
  isMedicine: boolean;
}
export interface ICard {
  address: string;
  client_id: number;
  client_username: string;
  description: string;
  id: number;
  is_ended: boolean;
  is_viewed: boolean;
  review: null | string;
  staff_id: null | number;
  staff_username: null | string;
  stars: null | number;
}
