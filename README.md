# Salón Krásy

Jemná ukážková webstránka pre salón krásy: kaderníctvo, kozmetika, nechty,
recenzie, galéria, orientačný cenník a rezervačný formulár.

## Úprava kontaktov

Telefón a email sú v `script.js`:

```js
const CONTACT = {
  phoneDisplay: "+421 900 000 000",
  phoneHref: "+421900000000",
  email: "salon@example.sk",
};
```

Po doplnení reálnych údajov sa tlačidlo `Zavolať` prepne na telefónny odkaz a
formulár pripraví email.

## Lokálne spustenie

```powershell
node server.mjs
```

Potom otvorte `http://localhost:4173`.
