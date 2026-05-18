from pathlib import Path
p = Path(r'frontend/registration/src/components/Registration/RegistrationForm.tsx')
text = p.read_text(encoding='utf-8')
old = """    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.access_token);
      alert('Успех! Токен сохранен.');
        navigate('/dashboard');
    } else {
      alert('Ошибка авторизации');
    }"""
new = """    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      alert('Успех! Токен сохранен.');
      navigate('/dashboard');
    } else {
      const errorData = await response.json().catch(() => null);
      alert(errorData?.message || 'Ошибка авторизации');
    }"""
if old not in text:
    raise SystemExit('target block not found')
p.write_text(text.replace(old, new), encoding='utf-8')
print('updated')
