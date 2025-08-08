export const useResetPassword = () => {
  const forgotPassword = async (email: string) => {
    try {
      const response: any = await $fetch('/api/auth/forgot-password', {
        method: 'POST',
        baseURL: 'http://localhost:8000',
        body: { email }
      });
      
      return {
        success: response.success || false,
        message: response.message || 'Terjadi kesalahan'
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.data?.message || error.message || 'Terjadi kesalahan saat mengirim email reset password'
      };
    }
  };

  const resetPassword = async (data: { 
    token: string; 
    email: string; 
    password: string; 
    password_confirmation: string 
  }) => {
    try {
      const response: any = await $fetch('/api/auth/reset-password', {
        method: 'POST',
        baseURL: 'http://localhost:8000',
        body: data
      });
      
      return {
        success: response.success || false,
        message: response.message || 'Terjadi kesalahan'
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.data?.message || error.message || 'Terjadi kesalahan saat mereset password'
      };
    }
  };

  return {
    forgotPassword,
    resetPassword
  };
};
