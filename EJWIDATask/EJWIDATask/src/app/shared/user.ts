import { Company } from './company'
import { Address } from './address'

export class User {

  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;

}

export function AssignUser(source:User, target?:User): User {

  let clone:User = target ?? ({} as User);
  target = target ? Object.assign({}, target) : clone;


  clone = Object.assign(clone, source);

  clone.address = source.address ? Object.assign({}, source.address) : target?.address;
  clone.address.geo = source.address?.geo ? Object.assign({}, source.address.geo) : target?.address?.geo;
  clone.company = source.company ? Object.assign({}, source.company) : target?.company;

  return clone;

}
