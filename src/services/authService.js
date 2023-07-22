import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useAuth() {
    const loading = ref(false);
    const formData = ref(null);
    const errorMessage = ref(null);
    const errors = ref(null);
    const users = ref([])

	const router = useRouter();

    const onLogin = async () => {
		try {
			loading.value = true;
			let response = await axios.post('/oauth', formData.value);
			if (response.status === 200) {
                loading.value = false;
                console.log(response.data.token)
				sessionStorage.setItem('_token', response.data.token)
				router.push({ name: 'dashboard' })
			}
		} catch (error) {
			loading.value = false;
            // store.commit('SET_ERROR', true)
			if (error.response.status === 401) {
				errorMessage.value = error.response.data.message;
			} 
            else if (error.response.status === 403) {
                errorMessage.value = error.response.data.message;
            }
            else if (error.response.status === 422) {
				errorMessage.value = error.response.data.message;
				if(error.response.data.errors) {
					errors.value = error.response.data.errors;
				}
			} 
            else {
				errorMessage.value = 'Erreur de traitement, vueillez réessayer plus tard.';
			}
		}
	};

    const onGetUsers = async () => {
		try {
			loading.value = true;
			let response = await axios.get('/users');
			if (response.status === 200) {
                console.log(response)
				users.value = response.data.data
				loading.value = false;
			}
		} catch (error) {
			loading.value = false;
			// store.commit('SET_ERROR', true)
			if (error.response.status === 422) {
				errorMessage.value = error.response.data.message;
			} else {
				errorMessage.value = 'Erreur de traitement, vueillez réessayer plus tard.';
			}
		}
	};

    return {
        loading,
        formData,
        errors,
        errorMessage,
        users,
        onLogin,
        onGetUsers
    }
}
