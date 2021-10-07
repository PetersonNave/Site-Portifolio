

function Teste2(){


}
async function Teste()
{
    const api = async () => {
        const response = await fetch('https://api.github.com/users/PetersonNave');
        const data = await response.json();

        return data.public_repos;
    }

    const api_data = await api();

    console.log(api_data);

}
 