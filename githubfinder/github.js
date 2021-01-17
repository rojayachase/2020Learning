// Client ID
//      3899238330b26a94d82c
//Key
//     895b6b245246d938214b8fc9afe7424cd639daba

class Github {
    constructor() {
    this.client_id = '3899238330b26a94d82c';
    this.client_secret = '24d43b3590394e3081acce8d78bc52bee2639366';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
    }
async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client.secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client.secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();


    return {
        profile,
        repos
    }
}
}