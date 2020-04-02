const useHistory = () => ({
  loading: false,
  builds: [
    {
      buildId: '1234',
      status: 'success',
      commitName: 'add new feature',
      branch: 'master',
      hash: '9c9f0b9',
      author: 'Kyle Sympson',
      date: '21 янв, 03:06',
      duration: '1 ч 20 мин',
    },
    {
      buildId: '1235',
      status: 'danger',
      commitName: 'fix minor bug',
      branch: 'master',
      hash: '9c9f0b5',
      author: 'Dan Abramov',
      date: '21 янв, 03:06',
      duration: '1 ч 20 мин',
    },
  ],
});

export default useHistory;
