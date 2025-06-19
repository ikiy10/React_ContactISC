import React, { useState } from "react";

const COLORS = {
  primary: "#00b894",
  danger: "#d63031",
  bg: "#f1f2f6",
  card: "#fff",
  border: "#dfe6e9",
  text: "#2d3436",
};

const ContactApp = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Alex Agus",
      tag: "@agusxhibos",
      type: "Teman",
      avatar: "https://ui-avatars.com/api/?name=Alex+Agus",
    },
    {
      id: 2,
      name: "Biren Kim",
      tag: "@kimaguen",
      type: "Teman",
      avatar: "https://ui-avatars.com/api/?name=Biren+Kim",
    },
  ]);
  const [form, setForm] = useState({ name: "", tag: "", type: "Teman" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.tag) return;
    setContacts([
      ...contacts,
      {
        id: Date.now(),
        name: form.name,
        tag: form.tag,
        type: form.type,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(form.name)}`,
      },
    ]);
    setForm({ name: "", tag: "", type: "Teman" });
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.bg,
        padding: 0,
        margin: 0,
        fontFamily: "'Segoe UI', Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 400,
          margin: "40px auto",
          background: COLORS.card,
          borderRadius: 24,
          boxShadow: "0 4px 24px rgba(0,0,0,0.09)",
          padding: "32px 24px",
          border: `1px solid ${COLORS.border}`,
        }}
      >
        <h2
          style={{
            color: COLORS.primary,
            textAlign: "center",
            marginBottom: 24,
            letterSpacing: 2,
            fontWeight: 700,
          }}
        >
          📒 Aplikasi Contact
        </h2>

        <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
          <input
            name="name"
            type="text"
            placeholder="Nama"
            value={form.name}
            onChange={handleChange}
            style={{
              width: "100%",
              boxSizing: "border-box",
              marginBottom: 10,
              padding: "10px 16px",
              borderRadius: 12,
              border: `1px solid ${COLORS.border}`,
              outline: COLORS.primary,
              fontSize: 16,
            }}
            autoComplete="off"
            required
          />
          <input
            name="tag"
            type="text"
            placeholder="Tag (misal: @agus123)"
            value={form.tag}
            onChange={handleChange}
            style={{
              width: "100%",
              boxSizing: "border-box",
              marginBottom: 10,
              padding: "10px 16px",
              borderRadius: 12,
              border: `1px solid ${COLORS.border}`,
              fontSize: 16,
            }}
            autoComplete="off"
            required
          />
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            style={{
              width: "100%",
              boxSizing: "border-box",
              marginBottom: 16,
              padding: "10px 16px",
              borderRadius: 12,
              border: `1px solid ${COLORS.border}`,
              fontSize: 16,
              background: COLORS.bg,
            }}
          >
            <option value="Teman">Teman</option>
            <option value="Keluarga">Keluarga</option>
            <option value="Kerja">Kerja</option>
          </select>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: 14,
              border: "none",
              background: COLORS.primary,
              color: "#fff",
              fontSize: 18,
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0,184,148,0.09)",
              transition: "background 0.2s",
            }}
          >
            + Tambah Kontak
          </button>
        </form>

        <h3
          style={{
            color: COLORS.text,
            margin: "18px 0 12px 0",
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          Daftar Kontak
        </h3>
        {contacts.length === 0 && (
          <div style={{ color: "#888", textAlign: "center" }}>
            Belum ada kontak.
          </div>
        )}
        <div>
          {contacts.map((contact) => (
            <div
              key={contact.id}
              style={{
                display: "flex",
                alignItems: "center",
                background: "#f8fafd",
                borderRadius: 18,
                boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
                marginBottom: 14,
                padding: "10px 12px",
              }}
            >
              <img
                src={contact.avatar}
                alt={contact.name}
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  marginRight: 14,
                  border: `2px solid ${COLORS.primary}`,
                }}
              />
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: COLORS.text,
                    letterSpacing: 0.2,
                  }}
                >
                  {contact.name}
                </span>
                <span style={{ fontSize: 13, color: "#888", fontStyle: "italic" }}>
                  {contact.tag}
                </span>
              </div>
              <span
                style={{
                  background: COLORS.primary,
                  color: "#fff",
                  borderRadius: 8,
                  padding: "3px 10px",
                  fontSize: 13,
                  marginRight: 10,
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                {contact.type}
              </span>
              <button
                onClick={() => handleDelete(contact.id)}
                style={{
                  border: "none",
                  background: COLORS.danger,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 20,
                  cursor: "pointer",
                  borderRadius: 12,
                  padding: "6px 12px",
                  marginLeft: 10,
                  boxShadow: "0 2px 4px rgba(214,48,49,0.10)",
                }}
                title="Hapus"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
        <div
          style={{
            textAlign: "center",
            color: "#bbb",
            fontSize: 12,
            marginTop: 12,
          }}
        >
          <br />
          <span style={{ fontSize: 10 }}>made by rizky@isc</span>
        </div>
      </div>
    </div>
  );
};

export default ContactApp;
