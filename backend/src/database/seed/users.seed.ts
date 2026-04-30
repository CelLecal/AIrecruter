import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../../user/user.entity';

export async function seedUsers(dataSource: DataSource) {
  const userRepository = dataSource.getRepository(User);

  const existingUsers = await userRepository.find({
    select: ['email'],
  });

  const existingEmails = new Set(existingUsers.map(u => u.email));

  const baseUsers = [
    { full_name: 'Иванов Иван Иванович', email: 'ivanov_ivan_ivanovich@test.ru', role_id: 1 },
    { full_name: 'Смирнова Ольга Сергеевна', email: 'smirnova_olga_sergeevna@test.ru', role_id: 2 },
    { full_name: 'Петров Сергей Андреевич', email: 'petrov_sergey_andreevich@test.ru', role_id: 3 },
    { full_name: 'Сидоров Алексей Николаевич', email: 'sidorov_aleksey_nikolaevich@test.ru', role_id: 3 },
    { full_name: 'Кузнецова Мария Ивановна', email: 'kuznetsova_mariya_ivanovna@test.ru', role_id: 3 },
    { full_name: 'Попов Дмитрий Олегович', email: 'popov_dmitriy_olegovich@test.ru', role_id: 3 },
    { full_name: 'Васильева Анна Петровна', email: 'vasilieva_anna_petrovna@test.ru', role_id: 3 },
    { full_name: 'Морозов Игорь Сергеевич', email: 'morozov_igor_sergeevich@test.ru', role_id: 3 },
    { full_name: 'Новикова Елена Викторовна', email: 'novikova_elena_viktorovna@test.ru', role_id: 3 },
    { full_name: 'Фёдоров Артём Павлович', email: 'fedorov_artem_pavlovich@test.ru', role_id: 3 },
    { full_name: 'Орлова Наталья Андреевна', email: 'orlova_natalya_andreevna@test.ru', role_id: 3 },
  ];

  const newUsers = baseUsers.filter(u => !existingEmails.has(u.email));

  if (newUsers.length === 0) {
    console.log('ℹ️ Users already seeded');
    return;
  }

  // создаём пользователей СРАЗУ с паролем
  const usersToInsert = newUsers.map((u, index) => {
    const password = String(index + 1); // 1,2,3... (или можно email)

    return {
      ...u,
      status: 'active',
      password_hash: bcrypt.hashSync(password, 10),
    };
  });

  await userRepository.save(usersToInsert);

  console.log('✅ Users seeded: ' + usersToInsert.length);
}