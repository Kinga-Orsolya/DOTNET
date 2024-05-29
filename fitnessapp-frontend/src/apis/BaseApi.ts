import axios from 'axios';
import LoginValuesDTOIn from '../types/DTOIns/LoginValuesDTOIn.type';
import RegisterValuesDTOIn from '../types/DTOIns/RegisterValuesDTOIn.type';
import UserDTOOut from '../types/DTOOuts/UserDTOOut.type';
import ClientDTOOut from '../types/DTOOuts/ClientDTOOut.type';
import ClientDTOIn from '../types/DTOIns/ClientDTOIn.type';
import ClientsMembershipDTOOut from '../types/DTOOuts/ClientsMembershipDTOOut.type';
import ClientsMembershipDTOIn from '../types/DTOIns/ClientsMembershipDTOIn.type';
import EntryDTOOut from '../types/DTOOuts/EntryDTOOut.type';
import EntryDTOIn from '../types/DTOIns/EntryDTOIn.type';
import GymDTOOut from '../types/DTOOuts/GymDTOOut.type';
import GymDTOIn from '../types/DTOIns/GymDTOIn.type';
import MembershipDTOOut from '../types/DTOOuts/MembershipDTOOut.type';
import MembershipDTOIn from '../types/DTOIns/MembershipDTOIn.type';
import { UserDTOIn } from '../types/DTOIns/UserDTOIn.type';


const axiosInstance = axios.create({
  baseURL: 'https://localhost:7213/api',
  withCredentials: true,
  timeout: 2500
});

axiosInstance.interceptors.request.use((config) => {
  const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN');
  if (AUTH_TOKEN) {
    config.headers.Authorization = AUTH_TOKEN;
  }

  return config;
});


export const BaseApi = {
  // =============================================
  // ======= LOGIN, REGISTER, USER PROFILE =======
  // =============================================

  /** @returns JWT Token */
  login: async (values: LoginValuesDTOIn): Promise<any> => {
    const response = await axiosInstance.post('/users/login', values);
    return response.data;
  },

  register: async (values: RegisterValuesDTOIn): Promise<void> => {
    await axiosInstance.post('/users/register', values);
  },

  /** @returns Logged In User's Data */
  getLoggedInUserData: async (): Promise<UserDTOOut> => {
    const response = await axiosInstance.get('/users/profile');
    const userData: UserDTOOut = response.data;

    return userData;
  },

  updateLoggedInUser: async (newValues: RegisterValuesDTOIn): Promise<void> => {
    await axiosInstance.put('/users/profile', newValues);
  },

  // =============================================
  // ================== CLIENTS ==================
  // =============================================

  /** @returns All Clients */
  getAllClients: async (): Promise<ClientDTOOut[]> => {
    const response = await axiosInstance.get('/clients');
    const clients: ClientDTOOut[] = response.data;

    return clients;
  },

  /** @returns One Client By Id */
  getOneClientById: async (id: number): Promise<ClientDTOOut> => {
    const response = await axiosInstance.get(`/clients/${id}`);
    const client: ClientDTOOut = response.data;

    return client;
  },

  createClient: async (values: ClientDTOIn): Promise<void> => {
    await axiosInstance.post('/clients', values);
  },

  updateClient: async (id: number, newValues: ClientDTOIn): Promise<void> => {
    await axiosInstance.put(`/clients/${id}`, newValues);
  },

  deleteClient: async (id: number): Promise<void> => {
    await axiosInstance.delete(`/clients/${id}`);
  },

  // =========================================================
  // ================== CLIENTS-MEMBERSHIPS ==================
  // =========================================================

  /** @returns All Memberships of a Client */
  getAllMembershipsOfOneClient: async (clientId: number): Promise<ClientsMembershipDTOOut[]> => {
    const response = await axiosInstance.get(`/clients/${clientId}/memberships`);
    const clientsMemberships: ClientsMembershipDTOOut[] = response.data;

    return clientsMemberships;
  },

  /** @returns One Membership of a Client */
  getOneMembershipOfOneClient: async (clientId: number, membershipId: number): Promise<ClientsMembershipDTOOut> => {
    const response = await axiosInstance.get(`/clients/${clientId}/memberships/${membershipId}`);
    const clientsMembership: ClientsMembershipDTOOut = response.data;

    return clientsMembership;
  },

  addOneMembershipToOneClient: async (clientId: number, values: ClientsMembershipDTOIn): Promise<void> => {
    await axiosInstance.post(`/clients/${clientId}/memberships`, values);
  },

  updateOneMembershipOfOneClient: async (clientId: number, membershipId: number, newValues: ClientsMembershipDTOIn): Promise<void> => {
    await axiosInstance.put(`/clients/${clientId}/memberships/${membershipId}`, newValues);
  },

  removeOneMembershipFromOneClient: async (clientId: number, membershipId: number): Promise<void> => {
    await axiosInstance.delete(`/clients/${clientId}/memberships/${membershipId}`);
  },

  // =============================================
  // ================== ENTRIES ==================
  // =============================================

  /** @returns All Entries */
  getAllEntries: async (): Promise<EntryDTOOut[]> => {
    const response = await axiosInstance.get('/entries');
    const entries: EntryDTOOut[] = response.data;
  
    return entries;
  },

  /** @returns One Entry By Id */
  getOneEntryById: async (id: number): Promise<EntryDTOOut> => {
    const response = await axiosInstance.get(`/entries/${id}`);
    const entry: EntryDTOOut = response.data;

    return entry;
  },

  createEntry: async (values: EntryDTOIn): Promise<void> => {
    await axiosInstance.post('/entries', values);
  },

  updateEntry: async (id: number, newValues: EntryDTOIn): Promise<void> => {
    await axiosInstance.put(`/entries/${id}`, newValues);
  },

  deleteEntry: async (id: number): Promise<void> => {
    await axiosInstance.delete(`/entries/${id}`);
  },

  // ============================================
  // =================== GYMS ===================
  // ============================================

  /** @returns All Gyms */
  getAllGyms: async (): Promise<GymDTOOut[]> => {
    const response = await axiosInstance.get('/gyms');
    const gyms: GymDTOOut[] = response.data;

    return gyms;
  },

  /** @returns One Gym By Id */
  getOneGymById: async (id: number): Promise<GymDTOOut> => {
    const response = await axiosInstance.get(`/gyms/${id}`);
    const gym: GymDTOOut = response.data;

    return gym;
  },

  createGym: async (values: GymDTOIn): Promise<void> => {
    await axiosInstance.post('/gyms', values);
  },

  updateGym: async (id: number, newValues: GymDTOIn): Promise<void> => {
    await axiosInstance.put(`/gyms/${id}`, newValues);
  },

  deleteGym: async (id: number): Promise<void> => {
    await axiosInstance.delete(`/gyms/${id}`);
  },

  // =================================================
  // ================== MEMBERSHIPS ==================
  // =================================================

  /** @returns All Memberships */
  getAllMemberships: async (): Promise<MembershipDTOOut[]> => {
    const response = await axiosInstance.get('/memberships');
    const memberships: MembershipDTOOut[] = response.data;

    return memberships;
  },

  /** @returns One Membership By Id */
  getOneMembershipById: async (id: number): Promise<MembershipDTOOut> => {
    const response = await axiosInstance.get(`/memberships/${id}`);
    const membership: MembershipDTOOut = response.data;

    return membership;
  },

  createMembership: async (values: MembershipDTOIn): Promise<void> => {
    await axiosInstance.post('/memberships', values);
  },

  updateMembership: async (id: number, newValues: MembershipDTOIn): Promise<void> => {
    await axiosInstance.put(`/memberships/${id}`, newValues);
  },

  deleteMembership: async (id: number): Promise<void> => {
    await axiosInstance.delete(`/memberships/${id}`);
  },

  // =============================================
  // =================== USERS ===================
  // =============================================
  
  /** @returns All Users */
  getAllUsers: async (): Promise<UserDTOOut[]> => {
    const response = await axiosInstance.get('/users');
    const users: UserDTOOut[] = response.data;

    return users;
  },

  /** @returns One User By Id */
  getOneUserById: async (id: number): Promise<UserDTOOut> => {
    const response = await axiosInstance.get(`/users/${id}`);
    const user: UserDTOOut = response.data;

    return user;
  },

  createUser: async (values: UserDTOIn): Promise<void> => {
    await axiosInstance.post('/users', values);
  },

  updateUser: async (id: number, newValues: UserDTOIn): Promise<void> => {
    await axiosInstance.put(`/users/${id}`, newValues);
  },

  deleteUser: async (id: number): Promise<void> => {
    await axiosInstance.delete(`/users/${id}`);
  }
}
