import { toast } from 'react-hot-toast';

export const showInfoMessage = message => {
  toast.error(message);
};

export const showSuccessMessage = message => {
  toast.success(message);
};