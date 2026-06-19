--
-- PostgreSQL database dump
--

\restrict EZG6BhB584TtEYVNjUMNnOrMxNPbOdZ9xdcCSMlv5KqlVNWWjBsnTc5G7xki6MB

-- Dumped from database version 15.17 (Debian 15.17-1.pgdg13+1)
-- Dumped by pg_dump version 18.3

-- Started on 2026-06-19 21:09:50

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 24599)
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- TOC entry 3571 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 26188)
-- Name: ai_provider_settings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ai_provider_settings (
    id integer NOT NULL,
    provider_code character varying(50) NOT NULL,
    model_name character varying(100) NOT NULL,
    api_key text NOT NULL,
    base_url text,
    is_active boolean DEFAULT false NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.ai_provider_settings OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 26187)
-- Name: ai_provider_settings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ai_provider_settings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ai_provider_settings_id_seq OWNER TO postgres;

--
-- TOC entry 3572 (class 0 OID 0)
-- Dependencies: 215
-- Name: ai_provider_settings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ai_provider_settings_id_seq OWNED BY public.ai_provider_settings.id;


--
-- TOC entry 219 (class 1259 OID 26398)
-- Name: applications; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.applications (
    id integer NOT NULL,
    candidate_id integer NOT NULL,
    vacancy_id integer NOT NULL,
    application_source character varying(50),
    screening_status character varying(50),
    fit_score integer,
    applied_at timestamp without time zone NOT NULL
);


ALTER TABLE public.applications OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 26401)
-- Name: applications_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.applications_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.applications_id_seq OWNER TO postgres;

--
-- TOC entry 3573 (class 0 OID 0)
-- Dependencies: 220
-- Name: applications_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.applications_id_seq OWNED BY public.applications.id;


--
-- TOC entry 218 (class 1259 OID 26200)
-- Name: candidate_ai_results; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.candidate_ai_results (
    id integer NOT NULL,
    candidate_id integer NOT NULL,
    summary_text text,
    fit_assessment text,
    risk_assessment text,
    recommendation_text text,
    provider_code character varying(50) NOT NULL,
    model_name character varying(100) NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.candidate_ai_results OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 26199)
-- Name: candidate_ai_results_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.candidate_ai_results_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.candidate_ai_results_id_seq OWNER TO postgres;

--
-- TOC entry 3574 (class 0 OID 0)
-- Dependencies: 217
-- Name: candidate_ai_results_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.candidate_ai_results_id_seq OWNED BY public.candidate_ai_results.id;


--
-- TOC entry 221 (class 1259 OID 26402)
-- Name: candidate_documents; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.candidate_documents (
    id integer NOT NULL,
    candidate_id integer NOT NULL,
    document_type character varying(50),
    file_name character varying(100),
    file_path character varying(200),
    upload_status character varying(20),
    uploaded_at timestamp without time zone
);


ALTER TABLE public.candidate_documents OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 26405)
-- Name: candidate_documents_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.candidate_documents_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.candidate_documents_id_seq OWNER TO postgres;

--
-- TOC entry 3575 (class 0 OID 0)
-- Dependencies: 222
-- Name: candidate_documents_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.candidate_documents_id_seq OWNED BY public.candidate_documents.id;


--
-- TOC entry 226 (class 1259 OID 26514)
-- Name: candidate_profiles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.candidate_profiles (
    id integer NOT NULL,
    candidate_id integer,
    license_category character varying(10),
    experience_years integer,
    work_schedule_preference character varying(50),
    hiring_score numeric,
    risk_level character varying(20),
    ai_summary text,
    hr_recommendation text,
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.candidate_profiles OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 26513)
-- Name: candidate_profiles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.candidate_profiles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.candidate_profiles_id_seq OWNER TO postgres;

--
-- TOC entry 3576 (class 0 OID 0)
-- Dependencies: 225
-- Name: candidate_profiles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.candidate_profiles_id_seq OWNED BY public.candidate_profiles.id;


--
-- TOC entry 228 (class 1259 OID 26529)
-- Name: candidates; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.candidates (
    id integer NOT NULL,
    full_name character varying(100),
    phone character varying(20),
    email character varying(100),
    birth_date date,
    city character varying(100),
    current_status character varying(50),
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.candidates OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 26528)
-- Name: candidates_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.candidates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.candidates_id_seq OWNER TO postgres;

--
-- TOC entry 3577 (class 0 OID 0)
-- Dependencies: 227
-- Name: candidates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.candidates_id_seq OWNED BY public.candidates.id;


--
-- TOC entry 230 (class 1259 OID 26537)
-- Name: chatbot_messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chatbot_messages (
    id integer NOT NULL,
    session_id integer NOT NULL,
    sender_type character varying(10) NOT NULL,
    message_text text NOT NULL,
    created_at timestamp without time zone NOT NULL,
    CONSTRAINT chatbot_messages_sender_type_check CHECK (((sender_type)::text = ANY ((ARRAY['bot'::character varying, 'candidate'::character varying])::text[])))
);


ALTER TABLE public.chatbot_messages OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 26536)
-- Name: chatbot_messages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.chatbot_messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.chatbot_messages_id_seq OWNER TO postgres;

--
-- TOC entry 3578 (class 0 OID 0)
-- Dependencies: 229
-- Name: chatbot_messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.chatbot_messages_id_seq OWNED BY public.chatbot_messages.id;


--
-- TOC entry 223 (class 1259 OID 26424)
-- Name: chatbot_sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chatbot_sessions (
    id integer NOT NULL,
    candidate_id integer NOT NULL,
    channel character varying(20),
    session_status character varying(20),
    started_at timestamp without time zone,
    completed_at timestamp without time zone
);


ALTER TABLE public.chatbot_sessions OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 26427)
-- Name: chatbot_sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.chatbot_sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.chatbot_sessions_id_seq OWNER TO postgres;

--
-- TOC entry 3579 (class 0 OID 0)
-- Dependencies: 224
-- Name: chatbot_sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.chatbot_sessions_id_seq OWNED BY public.chatbot_sessions.id;


--
-- TOC entry 237 (class 1259 OID 26635)
-- Name: dashboard; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.dashboard AS
 SELECT count(*) AS new_candidates_count,
    count(*) FILTER (WHERE ((candidates.current_status)::text = 'screening'::text)) AS primary_selection_count,
    count(*) FILTER (WHERE ((candidates.current_status)::text = 'interview'::text)) AS document_verification_count,
    count(*) FILTER (WHERE ((candidates.current_status)::text = ANY ((ARRAY['offer'::character varying, 'hired'::character varying])::text[]))) AS ready_for_registration_count,
    ( SELECT jsonb_agg(row_to_json(t.*)) AS jsonb_agg
           FROM ( SELECT candidates_1.id,
                    candidates_1.full_name,
                    candidates_1.current_status
                   FROM public.candidates candidates_1
                  ORDER BY candidates_1.created_at DESC
                 LIMIT 5) t) AS latest_candidates,
    jsonb_build_object('screening', count(*) FILTER (WHERE ((candidates.current_status)::text = 'screening'::text)), 'interview', count(*) FILTER (WHERE ((candidates.current_status)::text = 'interview'::text)), 'offer', count(*) FILTER (WHERE ((candidates.current_status)::text = 'offer'::text)), 'hired', count(*) FILTER (WHERE ((candidates.current_status)::text = 'hired'::text)), 'rejected', count(*) FILTER (WHERE ((candidates.current_status)::text = 'rejected'::text))) AS hiring_funnel
   FROM public.candidates;


ALTER VIEW public.dashboard OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 26547)
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    code character varying(50) NOT NULL
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 26546)
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.roles_id_seq OWNER TO postgres;

--
-- TOC entry 3580 (class 0 OID 0)
-- Dependencies: 231
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- TOC entry 236 (class 1259 OID 26598)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    full_name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password_hash character varying(255) NOT NULL,
    role_id integer NOT NULL,
    status character varying(50) DEFAULT 'active'::character varying NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 26597)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 3581 (class 0 OID 0)
-- Dependencies: 235
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 234 (class 1259 OID 26556)
-- Name: vacancies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vacancies (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    department character varying(100) NOT NULL,
    location character varying(100) NOT NULL,
    shift_type character varying(50) NOT NULL,
    required_license_category character varying(5) NOT NULL,
    min_experience_years integer NOT NULL,
    status character varying(20) NOT NULL
);


ALTER TABLE public.vacancies OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 26555)
-- Name: vacancies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.vacancies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.vacancies_id_seq OWNER TO postgres;

--
-- TOC entry 3582 (class 0 OID 0)
-- Dependencies: 233
-- Name: vacancies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.vacancies_id_seq OWNED BY public.vacancies.id;


--
-- TOC entry 3354 (class 2604 OID 26191)
-- Name: ai_provider_settings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_provider_settings ALTER COLUMN id SET DEFAULT nextval('public.ai_provider_settings_id_seq'::regclass);


--
-- TOC entry 3359 (class 2604 OID 26446)
-- Name: applications id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.applications ALTER COLUMN id SET DEFAULT nextval('public.applications_id_seq'::regclass);


--
-- TOC entry 3357 (class 2604 OID 26203)
-- Name: candidate_ai_results id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidate_ai_results ALTER COLUMN id SET DEFAULT nextval('public.candidate_ai_results_id_seq'::regclass);


--
-- TOC entry 3360 (class 2604 OID 26447)
-- Name: candidate_documents id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidate_documents ALTER COLUMN id SET DEFAULT nextval('public.candidate_documents_id_seq'::regclass);


--
-- TOC entry 3362 (class 2604 OID 26517)
-- Name: candidate_profiles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidate_profiles ALTER COLUMN id SET DEFAULT nextval('public.candidate_profiles_id_seq'::regclass);


--
-- TOC entry 3364 (class 2604 OID 26532)
-- Name: candidates id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidates ALTER COLUMN id SET DEFAULT nextval('public.candidates_id_seq'::regclass);


--
-- TOC entry 3366 (class 2604 OID 26540)
-- Name: chatbot_messages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_messages ALTER COLUMN id SET DEFAULT nextval('public.chatbot_messages_id_seq'::regclass);


--
-- TOC entry 3361 (class 2604 OID 26451)
-- Name: chatbot_sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_sessions ALTER COLUMN id SET DEFAULT nextval('public.chatbot_sessions_id_seq'::regclass);


--
-- TOC entry 3367 (class 2604 OID 26550)
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- TOC entry 3369 (class 2604 OID 26601)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3368 (class 2604 OID 26559)
-- Name: vacancies id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vacancies ALTER COLUMN id SET DEFAULT nextval('public.vacancies_id_seq'::regclass);


--
-- TOC entry 3545 (class 0 OID 26188)
-- Dependencies: 216
-- Data for Name: ai_provider_settings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ai_provider_settings (id, provider_code, model_name, api_key, base_url, is_active, updated_at) FROM stdin;
1	deepseek	deepseek-chat	sk-a78b77c2779b46e893f0cab0cea62068	https://api.deepseek.com	t	2026-05-16 16:00:56.652678+00
\.


--
-- TOC entry 3548 (class 0 OID 26398)
-- Dependencies: 219
-- Data for Name: applications; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.applications (id, candidate_id, vacancy_id, application_source, screening_status, fit_score, applied_at) FROM stdin;
1	1	1	website	checking	80	2026-03-31 11:10:00
2	2	2	recommendation	passed	78	2026-04-01 12:30:00
3	3	3	website	passed	77	2026-04-02 14:00:00
4	4	4	recommendation	passed	20	2026-04-03 13:20:00
5	5	5	website	passed	85	2026-04-04 15:30:00
6	6	6	recommendation	passed	98	2026-04-05 17:00:00
7	7	7	website	checking	75	2026-04-06 18:10:00
8	8	8	recommendation	passed	88	2026-04-07 19:30:00
9	9	9	website	checking	65	2026-04-08 20:40:00
\.


--
-- TOC entry 3547 (class 0 OID 26200)
-- Dependencies: 218
-- Data for Name: candidate_ai_results; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.candidate_ai_results (id, candidate_id, summary_text, fit_assessment, risk_assessment, recommendation_text, provider_code, model_name, created_at) FROM stdin;
5	1	**Сводка по кандидату: Petrov Sergey Andreevich**\n- **Возраст:** 29 лет (12.03.1995)\n- **Город:** Москва\n- **Вакансия:** Водитель автомобиля (график сменный)\n- **Стаж:** 6 лет (опыт достаточный, требование — от 3 лет)\n- **Категория прав:** B (соответствует)	Соответствует.	Риски: возможное несоответствие опыта работы (6 лет) требованиям сменного графика (например, готовность к ночным сменам), так как в резюме не указан конкретный стаж вождения.	**Рекомендация по кандидату: Петров Сергей Андреевич**\n\n**Вывод:** Кандидат **полностью подходит**.\n\n**Обоснование:**\n- **Стаж:** 6 лет (требуется 3) — перевыполнение.\n- **Категория прав:** B (совпадает с требованием).\n- **График:** Shift (совпадает).\n- **Город:** Москва (совпадает с местом работы).\n\n**Действие:** Пригласить на собеседование.	deepseek	deepseek-chat	2026-05-22 13:10:16.57014+00
7	3	**Кузнецова Мария Ивановна**  \n25 лет, Казань. Стаж 3 года, права категории B. Готова к гибкому графику.	Кандидат подходит. 3 года опыта, права B, гибкий график, Казань.	Риски: возможная нестабильность режима работы (flexible) при небольшом стаже (3 года), риск снижения дисциплины и сложности с командной коммуникацией из-за удаленного формата.	**Рекомендация HR по кандидату: Кузнецова Мария Ивановна**\n\n**Общие данные:**\n- Возраст: 26 лет (подходит для junior/middle)\n- Город: Казань\n- Стаж: 3 года\n- Права: категория B\n- Формат работы: гибкий (готов к гибриду или сменному графику)\n\n**Вывод:**\nКандидат соответствует должности. Рекомендуется к рассмотрению при условии закрытия вопросов по релокации (если требуется) и проверки профильного опыта.	deepseek	deepseek-chat	2026-05-22 18:13:59.77564+00
8	4	Попов Дмитрий Олегович, 34 года (19.01.1990), Новосибирск. Стаж 12 лет, права категории D. Ищет вахтовую работу.	Не соответствует (требуются права категории C/D/E для вахты).	Риски: потенциально завышенные ожидания по зарплате (стаж 12 лет) и возможные сложности с режимом работы (сменный график при наличии семьи/планов в Новосибирске).	**Рекомендация HR по кандидату: Попов Дмитрий Олегович**\n\n**Общие выводы:**\nОпытный кандидат (12 лет стажа), 34 года, готов к вахтовому графику (формат shift). Наличие прав категории D (автобусы) расширяет возможности для должностей, требующих перевозки персонала. Город проживания (Новосибирск) подходит для вахты на удаленных объектах.\n\n**Действия:**\n1. **Проверить релевантность стажа** — уточнить конкретные отрасли и должности за 12 лет.\n2. **Уточнить готовность к разъездам/вахте** — условия, сроки, географию.\n3. **Связаться для интервью** для оценки мотивации и соответствия профилю вакансии.\n\n**Риски:** Не указаны конкретные навыки и достижения, требуется проверка.	deepseek	deepseek-chat	2026-05-22 18:14:05.619407+00
6	2	**Сидоров Алексей Николаевич**\n- **Дата рождения:** 25.07.1992 (32 года)\n- **Город:** Санкт-Петербург\n- **Стаж:** 9 лет (требуется 5)\n- **Права:** Категория C\n- **Желаемая должность:** Водитель грузовика\n- **График:** Вахтовый метод	**Соответствие:** Полное.\n\n**Обоснование:** стаж (9 лет), категория прав (C), график (rotational), город (СПб) — все требования выполнены.	Риски: возраст (32 года) и длительный стаж (9 лет) могут указывать на профессиональное выгорание или проблемы с дисциплиной. График работы (вахта) усложняет контроль.	**Рекомендация по кандидату: Сидоров Алексей Николаевич**\n\n- **Соответствие:** Полное. Опыт (9 лет) превышает требуемый (5 лет). Категория прав C совпадает.\n- **График:** Устраивает вахтовый метод (rotational).\n- **Локация:** Санкт-Петербург.\n- **Вердикт:** Подходит. Рекомендуется к собеседованию.	deepseek	deepseek-chat	2026-05-22 14:00:22.198086+00
\.


--
-- TOC entry 3550 (class 0 OID 26402)
-- Dependencies: 221
-- Data for Name: candidate_documents; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.candidate_documents (id, candidate_id, document_type, file_name, file_path, upload_status, uploaded_at) FROM stdin;
1	1	driver_license	license_petrov.jpg	/files/license_petrov.jpg	uploaded	2026-03-31 09:12:00
2	1	medical_book	medical_petrov.jpg	/files/medical_petrov.jpg	uploaded	2026-03-31 09:14:00
3	1	passport	passport_petrov.jpg	/files/passport_petrov.jpg	screening	2026-03-31 09:16:00
4	2	driver_license	license_sidorov.jpg	/files/license_sidorov.jpg	uploaded	2026-04-01 10:20:00
5	2	medical_book	medical_sidorov.jpg	/files/medical_sidorov.jpg	uploaded	2026-04-01 10:23:00
6	2	passport	passport_sidorov.jpg	/files/passport_sidorov.jpg	uploaded	2026-04-01 10:26:00
7	3	driver_license	license_kuznetsova.jpg	/files/license_kuznetsova.jpg	uploaded	2026-04-02 11:35:00
8	3	medical_book	medical_kuznetsova.jpg	/files/medical_kuznetsova.jpg	uploaded	2026-04-02 11:38:00
9	3	passport	passport_kuznetsova.jpg	/files/passport_kuznetsova.jpg	uploaded	2026-04-02 11:41:00
10	4	driver_license	license_popov.jpg	/files/license_popov.jpg	uploaded	2026-04-03 12:50:00
11	4	medical_book	medical_popov.jpg	/files/medical_popov.jpg	screening	2026-04-03 12:52:00
12	4	passport	passport_popov.jpg	/files/passport_popov.jpg	screening	2026-04-03 12:54:00
13	5	driver_license	license_vasilieva.jpg	/files/license_vasilieva.jpg	uploaded	2026-04-04 14:05:00
14	5	medical_book	medical_vasilieva.jpg	/files/medical_vasilieva.jpg	uploaded	2026-04-04 14:08:00
15	5	passport	passport_vasilieva.jpg	/files/passport_vasilieva.jpg	uploaded	2026-04-04 14:11:00
16	6	driver_license	license_morozov.jpg	/files/license_morozov.jpg	uploaded	2026-04-05 15:25:00
17	6	medical_book	medical_morozov.jpg	/files/medical_morozov.jpg	screening	2026-04-05 15:27:00
18	6	passport	passport_morozov.jpg	/files/passport_morozov.jpg	uploaded	2026-04-05 15:30:00
19	7	driver_license	license_novikova.jpg	/files/license_novikova.jpg	uploaded	2026-04-06 16:45:00
20	7	medical_book	medical_novikova.jpg	/files/medical_novikova.jpg	uploaded	2026-04-06 16:48:00
21	7	passport	passport_novikova.jpg	/files/passport_novikova.jpg	uploaded	2026-04-06 16:51:00
22	8	driver_license	license_fedorov.jpg	/files/license_fedorov.jpg	uploaded	2026-04-07 18:05:00
23	8	medical_book	medical_fedorov.jpg	/files/medical_fedorov.jpg	uploaded	2026-04-07 18:08:00
24	8	passport	passport_fedorov.jpg	/files/passport_fedorov.jpg	uploaded	2026-04-07 18:11:00
25	9	driver_license	license_orlova.jpg	/files/license_orlova.jpg	screening	2026-04-08 19:15:00
26	9	medical_book	medical_orlova.jpg	/files/medical_orlova.jpg	uploaded	2026-04-08 19:18:00
27	9	passport	passport_orlova.jpg	/files/passport_orlova.jpg	screening	2026-04-08 19:20:00
\.


--
-- TOC entry 3555 (class 0 OID 26514)
-- Dependencies: 226
-- Data for Name: candidate_profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.candidate_profiles (id, candidate_id, license_category, experience_years, work_schedule_preference, hiring_score, risk_level, ai_summary, hr_recommendation, updated_at) FROM stdin;
3	3	B	3	flexible	74	medium	Relatively low experience, but good attitude.	Consider for junior position.	2026-04-02 11:45:00
6	6	B	10	shift	91	low	Experienced and reliable, strong references.	Recommend for senior driver position.	2026-04-05 15:30:00
7	7	C	4	flexible	76	medium	Moderate experience, flexible schedule is a plus.	Check driving record before final decision.	2026-04-06 16:45:00
8	8	D	11	rotational	93	low	Excellent qualifications for rotational long-haul work.	Verify last employer references.	2026-04-07 18:00:00
9	9	B	2	shift	65	high	Limited experience, needs supervision.	Consider only if no stronger candidates available.	2026-04-08 19:15:00
4	4	D	12	shift	95	low	Попов Дмитрий Олегович, 34 года (19.01.1990), Новосибирск. Стаж 12 лет, права категории D. Ищет вахтовую работу.	**Рекомендация HR по кандидату: Попов Дмитрий Олегович**\n\n**Общие выводы:**\nОпытный кандидат (12 лет стажа), 34 года, готов к вахтовому графику (формат shift). Наличие прав категории D (автобусы) расширяет возможности для должностей, требующих перевозки персонала. Город проживания (Новосибирск) подходит для вахты на удаленных объектах.\n\n**Действия:**\n1. **Проверить релевантность стажа** — уточнить конкретные отрасли и должности за 12 лет.\n2. **Уточнить готовность к разъездам/вахте** — условия, сроки, географию.\n3. **Связаться для интервью** для оценки мотивации и соответствия профилю вакансии.\n\n**Риски:** Не указаны конкретные навыки и достижения, требуется проверка.	2026-04-03 13:00:00
1	1	B	6	shift	82	low	**Сводка по кандидату: Petrov Sergey Andreevich**\n- **Возраст:** 29 лет (12.03.1995)\n- **Город:** Москва\n- **Вакансия:** Водитель автомобиля (график сменный)\n- **Стаж:** 6 лет (опыт достаточный, требование — от 3 лет)\n- **Категория прав:** B (соответствует)	**Рекомендация по кандидату: Петров Сергей Андреевич**\n\n**Вывод:** Кандидат **полностью подходит**.\n\n**Обоснование:**\n- **Стаж:** 6 лет (требуется 3) — перевыполнение.\n- **Категория прав:** B (совпадает с требованием).\n- **График:** Shift (совпадает).\n- **Город:** Москва (совпадает с местом работы).\n\n**Действие:** Пригласить на собеседование.	2026-03-31 09:20:00
5	5	C	5	night	79	medium	Васильева Анна Петровна, 14.06.1996, Екатеринбург. Стаж 5 лет, права категории C. Готова к ночной работе.	**Кандидат:** Васильева Анна Петровна  \n**Рекомендации HR:**\n\n1. **Опыт:** 5 лет — подходит для позиций middle.\n2. **Локация:** Екатеринбург (рассматривать удаленку/гибрид при необходимости в Москве).\n3. **Права:** Категория C (может быть полезна для разъездных/логистических ролей).\n4. **График:** Готов к ночной работе — идеально для сменных проектов, поддержки или ночных смен.\n5. **Вывод:** Рекомендуется к собеседованию на вакансии с гибким/ночным графиком или в Екатеринбурге.	2026-04-04 14:15:00
2	2	C	9	rotational	88	low	**Сидоров Алексей Николаевич**\n- **Дата рождения:** 25.07.1992 (32 года)\n- **Город:** Санкт-Петербург\n- **Стаж:** 9 лет (требуется 5)\n- **Права:** Категория C\n- **Желаемая должность:** Водитель грузовика\n- **График:** Вахтовый метод	**Рекомендация по кандидату: Сидоров Алексей Николаевич**\n\n- **Соответствие:** Полное. Опыт (9 лет) превышает требуемый (5 лет). Категория прав C совпадает.\n- **График:** Устраивает вахтовый метод (rotational).\n- **Локация:** Санкт-Петербург.\n- **Вердикт:** Подходит. Рекомендуется к собеседованию.	2026-04-01 10:30:00
\.


--
-- TOC entry 3557 (class 0 OID 26529)
-- Dependencies: 228
-- Data for Name: candidates; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.candidates (id, full_name, phone, email, birth_date, city, current_status, created_at) FROM stdin;
1	Petrov Sergey Andreevich	+79990000001	petrov_sergey_andreevich@test.ru	1995-03-12	Moscow	screening	2026-03-31 09:00:00
2	Sidorov Aleksey Nikolaevich	+79990000002	sidorov_aleksey_nikolaevich@test.ru	1992-07-25	Saint Petersburg	interview	2026-04-01 10:15:00
3	Kuznetsova Maria Ivanovna	+79990000003	kuznetsova_mariya_ivanovna@test.ru	1998-11-03	Kazan	offer	2026-04-02 11:30:00
4	Popov Dmitriy Olegovich	+79990000004	popov_dmitriy_olegovich@test.ru	1990-01-19	Novosibirsk	rejected	2026-04-03 12:45:00
5	Vasilieva Anna Petrovna	+79990000005	vasilieva_anna_petrovna@test.ru	1996-06-14	Yekaterinburg	hired	2026-04-04 14:00:00
6	Morozov Igor Sergeevich	+79990000006	morozov_igor_sergeevich@test.ru	1993-09-09	Samara	screening	2026-04-05 15:20:00
7	Novikova Elena Viktorovna	+79990000007	novikova_elena_viktorovna@test.ru	1997-12-22	Omsk	interview	2026-04-06 16:40:00
8	Fedorov Artem Pavlovich	+79990000008	fedorov_artem_pavlovich@test.ru	1994-05-30	Rostov-on-Don	offer	2026-04-07 18:00:00
9	Orlova Natalya Andreevna	+79990000009	orlova_natalya_andreevna@test.ru	1999-08-17	Ufa	screening	2026-04-08 19:10:00
\.


--
-- TOC entry 3559 (class 0 OID 26537)
-- Dependencies: 230
-- Data for Name: chatbot_messages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.chatbot_messages (id, session_id, sender_type, message_text, created_at) FROM stdin;
1	1	bot	Hello! Welcome to the driver job application. Please enter your full name.	2026-03-31 09:00:00
2	1	candidate	Petrov Sergey Andreevich	2026-03-31 09:00:45
3	1	bot	What is your driver's license category? (B / C / D)	2026-03-31 09:01:00
4	1	candidate	Category B	2026-03-31 09:01:30
5	1	bot	How many years of driving experience do you have?	2026-03-31 09:01:45
6	1	candidate	6 years	2026-03-31 09:02:10
7	1	bot	What work schedule do you prefer? (shift / rotational / flexible / night)	2026-03-31 09:02:25
8	1	candidate	Shift	2026-03-31 09:02:50
9	1	bot	In which city are you located?	2026-03-31 09:03:05
10	1	candidate	Moscow	2026-03-31 09:03:20
11	1	bot	Thank you! Your application has been received and is currently under review.	2026-03-31 09:03:35
12	2	bot	Hello! Welcome to the driver job application. Please enter your full name.	2026-04-01 10:15:00
13	2	candidate	Sidorov Aleksey Nikolaevich	2026-04-01 10:15:40
14	2	bot	What is your driver's license category? (B / C / D)	2026-04-01 10:16:00
15	2	candidate	Category C	2026-04-01 10:16:25
16	2	bot	How many years of driving experience do you have?	2026-04-01 10:16:40
17	2	candidate	9 years	2026-04-01 10:17:00
18	2	bot	What work schedule do you prefer? (shift / rotational / flexible / night)	2026-04-01 10:17:15
19	2	candidate	Rotational	2026-04-01 10:17:35
20	2	bot	In which city are you located?	2026-04-01 10:17:50
21	2	candidate	Saint Petersburg	2026-04-01 10:18:10
22	2	bot	Great news! You have been invited to an interview. Our recruiter will contact you shortly.	2026-04-01 10:18:25
23	3	bot	Hello! Welcome to the driver job application. Please enter your full name.	2026-04-02 11:30:00
24	3	candidate	Kuznetsova Mariya Ivanovna	2026-04-02 11:30:50
25	3	bot	What is your driver's license category? (B / C / D)	2026-04-02 11:31:05
26	3	candidate	Category B	2026-04-02 11:31:30
27	3	bot	How many years of driving experience do you have?	2026-04-02 11:31:45
28	3	candidate	3 years	2026-04-02 11:32:05
29	3	bot	What work schedule do you prefer? (shift / rotational / flexible / night)	2026-04-02 11:32:20
30	3	candidate	Flexible	2026-04-02 11:32:40
31	3	bot	In which city are you located?	2026-04-02 11:32:55
32	3	candidate	Kazan	2026-04-02 11:33:10
33	3	bot	Congratulations! We would like to extend a job offer to you. Please check your email.	2026-04-02 11:33:25
34	4	bot	Hello! Welcome to the driver job application. Please enter your full name.	2026-04-03 12:45:00
35	4	candidate	Popov Dmitriy Olegovich	2026-04-03 12:45:35
36	4	bot	What is your driver's license category? (B / C / D)	2026-04-03 12:45:50
37	4	candidate	Category D	2026-04-03 12:46:15
38	4	bot	How many years of driving experience do you have?	2026-04-03 12:46:30
39	4	candidate	12 years	2026-04-03 12:46:50
40	4	bot	What work schedule do you prefer? (shift / rotational / flexible / night)	2026-04-03 12:47:05
41	4	candidate	Shift	2026-04-03 12:47:25
42	4	bot	In which city are you located?	2026-04-03 12:47:40
43	4	candidate	Novosibirsk	2026-04-03 12:47:55
44	4	bot	Thank you for your time. Unfortunately, your application did not meet our current requirements.	2026-04-03 12:48:10
45	5	bot	Hello! Welcome to the driver job application. Please enter your full name.	2026-04-04 14:00:00
46	5	candidate	Vasilieva Anna Petrovna	2026-04-04 14:00:40
47	5	bot	What is your driver's license category? (B / C / D)	2026-04-04 14:01:00
48	5	candidate	Category C	2026-04-04 14:01:20
49	5	bot	How many years of driving experience do you have?	2026-04-04 14:01:35
50	5	candidate	5 years	2026-04-04 14:01:55
51	5	bot	What work schedule do you prefer? (shift / rotational / flexible / night)	2026-04-04 14:02:10
52	5	candidate	Night	2026-04-04 14:02:30
53	5	bot	In which city are you located?	2026-04-04 14:02:45
54	5	candidate	Yekaterinburg	2026-04-04 14:03:00
55	5	bot	Welcome aboard! You have been successfully hired. Further details will be sent to your email.	2026-04-04 14:03:15
56	6	bot	Hello! Welcome to the driver job application. Please enter your full name.	2026-04-05 15:20:00
57	6	candidate	Morozov Igor Sergeevich	2026-04-05 15:20:45
58	6	bot	What is your driver's license category? (B / C / D)	2026-04-05 15:21:00
59	6	candidate	Category B	2026-04-05 15:21:20
60	6	bot	How many years of driving experience do you have?	2026-04-05 15:21:35
61	6	candidate	10 years	2026-04-05 15:21:55
62	6	bot	What work schedule do you prefer? (shift / rotational / flexible / night)	2026-04-05 15:22:10
63	6	candidate	Shift	2026-04-05 15:22:30
64	6	bot	In which city are you located?	2026-04-05 15:22:45
65	6	candidate	Samara	2026-04-05 15:23:00
66	6	bot	Thank you! Your application has been received and is currently under review.	2026-04-05 15:23:15
67	7	bot	Hello! Welcome to the driver job application. Please enter your full name.	2026-04-06 16:40:00
68	7	candidate	Novikova Elena Viktorovna	2026-04-06 16:40:40
69	7	bot	What is your driver's license category? (B / C / D)	2026-04-06 16:41:00
70	7	candidate	Category C	2026-04-06 16:41:20
71	7	bot	How many years of driving experience do you have?	2026-04-06 16:41:35
72	7	candidate	4 years	2026-04-06 16:41:55
73	7	bot	What work schedule do you prefer? (shift / rotational / flexible / night)	2026-04-06 16:42:10
74	7	candidate	Flexible	2026-04-06 16:42:30
75	7	bot	In which city are you located?	2026-04-06 16:42:45
76	7	candidate	Omsk	2026-04-06 16:43:00
77	7	bot	Great news! You have been invited to an interview. Our recruiter will contact you shortly.	2026-04-06 16:43:15
78	8	bot	Hello! Welcome to the driver job application. Please enter your full name.	2026-04-07 18:00:00
79	8	candidate	Fedorov Artem Pavlovich	2026-04-07 18:00:45
80	8	bot	What is your driver's license category? (B / C / D)	2026-04-07 18:01:00
81	8	candidate	Category D	2026-04-07 18:01:20
82	8	bot	How many years of driving experience do you have?	2026-04-07 18:01:35
83	8	candidate	11 years	2026-04-07 18:01:55
84	8	bot	What work schedule do you prefer? (shift / rotational / flexible / night)	2026-04-07 18:02:10
85	8	candidate	Rotational	2026-04-07 18:02:30
86	8	bot	In which city are you located?	2026-04-07 18:02:45
87	8	candidate	Rostov-on-Don	2026-04-07 18:03:00
88	8	bot	Congratulations! We would like to extend a job offer to you. Please check your email.	2026-04-07 18:03:15
89	9	bot	Hello! Welcome to the driver job application. Please enter your full name.	2026-04-08 19:10:00
90	9	candidate	Orlova Natalya Andreevna	2026-04-08 19:10:40
91	9	bot	What is your driver's license category? (B / C / D)	2026-04-08 19:11:00
92	9	candidate	Category B	2026-04-08 19:11:20
93	9	bot	How many years of driving experience do you have?	2026-04-08 19:11:35
94	9	candidate	2 years	2026-04-08 19:11:55
95	9	bot	What work schedule do you prefer? (shift / rotational / flexible / night)	2026-04-08 19:12:10
96	9	candidate	Shift	2026-04-08 19:12:30
97	9	bot	In which city are you located?	2026-04-08 19:12:45
98	9	candidate	Ufa	2026-04-08 19:13:00
99	9	bot	Thank you! Your application has been received and is currently under review.	2026-04-08 19:13:15
\.


--
-- TOC entry 3552 (class 0 OID 26424)
-- Dependencies: 223
-- Data for Name: chatbot_sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.chatbot_sessions (id, candidate_id, channel, session_status, started_at, completed_at) FROM stdin;
1	1	telegram	completed	2026-03-31 09:05:00	2026-03-31 09:22:00
2	2	whatsapp	completed	2026-04-01 10:20:00	2026-04-01 10:38:00
3	3	web	completed	2026-04-02 11:35:00	2026-04-02 11:55:00
4	4	telegram	abandoned	2026-04-03 12:50:00	2026-04-03 12:58:00
5	5	whatsapp	completed	2026-04-04 14:05:00	2026-04-04 14:28:00
6	6	web	active	2026-04-05 15:25:00	\N
7	7	telegram	completed	2026-04-06 16:45:00	2026-04-06 17:02:00
8	8	whatsapp	completed	2026-04-07 18:05:00	2026-04-07 18:24:00
9	9	web	active	2026-04-08 19:15:00	\N
\.


--
-- TOC entry 3561 (class 0 OID 26547)
-- Dependencies: 232
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, name, code) FROM stdin;
1	superadministrator	superadmin
2	administrator	admin
3	user	user
\.


--
-- TOC entry 3565 (class 0 OID 26598)
-- Dependencies: 236
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, full_name, email, password_hash, role_id, status, created_at) FROM stdin;
2	Ivan Ivanov	ivanov_ivan_ivanovich@test.ru	$2b$10$CTCngd7dTF1XuJ2gAmDTSuVIFBDVSRo3ULjCDWik5VpxwrjwokovW	1	active	2026-05-20 14:22:21.01775
3	Olga Smirnova	smirnova_olga_sergeevna@test.ru	$2b$10$8ulXPHHENWh25u2TuC7sCOX5DxDk8nIq/EuuA7IaHjyHSa5oJjSGm	2	active	2026-05-20 14:22:21.01775
4	Sergey Petrov	petrov_sergey_andreevich@test.ru	$2b$10$kGDujPzUtT1Nwn1RHN0Xwe214ePGoYZ4DSFp/JZcb0SpyL4BvBkza	3	active	2026-05-20 14:22:21.01775
5	Alexey Sidorov	sidorov_aleksey_nikolaevich@test.ru	$2b$10$PE9u1QDuX.bvITDuo/5O3eD5xmiy/RrkFqhOYXYW4Ucw/NjIagALe	3	active	2026-05-20 14:22:21.01775
6	Maria Kuznetsova	kuznetsova_mariya_ivanovna@test.ru	$2b$10$9mOTb4fWWTeQ6gcGKfCsUOkBjjEOMDRliXnUfN1vWPlOFWYTH9jg2	3	active	2026-05-20 14:22:21.01775
7	Dmitry Popov	popov_dmitriy_olegovich@test.ru	$2b$10$0uIvIlYAfL3rtG2zhMA5JON2pB2.FPSNJljZ6OJtF6WMmJnvYbvnO	3	active	2026-05-20 14:22:21.01775
8	Anna Vasilyeva	vasilieva_anna_petrovna@test.ru	$2b$10$IlVB0xGHSTfaeUEo57tsPOkYjxWYgQief114.kuaSxW8sZZwCibju	3	active	2026-05-20 14:22:21.01775
9	Igor Morozov	morozov_igor_sergeevich@test.ru	$2b$10$eBEdRvvWAeSkbyPP80KjlOFSgQhW2blrgAZuxtzaZbrpOzieAkEYy	3	active	2026-05-20 14:22:21.01775
10	Elena Novikova	novikova_elena_viktorovna@test.ru	$2b$10$PDrB.G9UvV8hju9W/JaZs.QbSfzX1ROozyi137t2UX8QsE6oKPQEe	3	active	2026-05-20 14:22:21.01775
11	Artem Fedorov	fedorov_artem_pavlovich@test.ru	$2b$10$p81viDsMTK3P.SaVqr20geHc7FptQKq5U8wndFgmbTRWnez.k1ByO	3	active	2026-05-20 14:22:21.01775
12	Natalya Orlova	orlova_natalya_andreevna@test.ru	$2b$10$OKeTtUY4WBV9HWaVsd1wsOyyPwyYuWHvJKT.nkTmTPiYMDfTjsQ5y	3	active	2026-05-20 14:22:21.01775
\.


--
-- TOC entry 3563 (class 0 OID 26556)
-- Dependencies: 234
-- Data for Name: vacancies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vacancies (id, title, department, location, shift_type, required_license_category, min_experience_years, status) FROM stdin;
1	car driver	transport department	Moscow	shift	B	3	open
2	truck driver	transport department	Saint Petersburg	rotational	C	5	open
3	car driver	transport department	Kazan	flexible	B	2	open
4	bus driver	transport department	Novosibirsk	shift	D	6	open
5	truck driver	transport department	Yekaterinburg	night	C	3	open
6	car driver	transport department	Samara	shift	B	5	open
7	truck driver	transport department	Omsk	flexible	C	2	open
8	bus driver	transport department	Rostov-on-Don	rotational	D	6	open
9	car driver	transport department	Ufa	shift	B	1	open
\.


--
-- TOC entry 3583 (class 0 OID 0)
-- Dependencies: 215
-- Name: ai_provider_settings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ai_provider_settings_id_seq', 3, true);


--
-- TOC entry 3584 (class 0 OID 0)
-- Dependencies: 220
-- Name: applications_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.applications_id_seq', 9, true);


--
-- TOC entry 3585 (class 0 OID 0)
-- Dependencies: 217
-- Name: candidate_ai_results_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.candidate_ai_results_id_seq', 8, true);


--
-- TOC entry 3586 (class 0 OID 0)
-- Dependencies: 222
-- Name: candidate_documents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.candidate_documents_id_seq', 27, true);


--
-- TOC entry 3587 (class 0 OID 0)
-- Dependencies: 225
-- Name: candidate_profiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.candidate_profiles_id_seq', 16, true);


--
-- TOC entry 3588 (class 0 OID 0)
-- Dependencies: 227
-- Name: candidates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.candidates_id_seq', 1, false);


--
-- TOC entry 3589 (class 0 OID 0)
-- Dependencies: 229
-- Name: chatbot_messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.chatbot_messages_id_seq', 99, true);


--
-- TOC entry 3590 (class 0 OID 0)
-- Dependencies: 224
-- Name: chatbot_sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.chatbot_sessions_id_seq', 9, true);


--
-- TOC entry 3591 (class 0 OID 0)
-- Dependencies: 231
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_id_seq', 3, true);


--
-- TOC entry 3592 (class 0 OID 0)
-- Dependencies: 235
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 12, true);


--
-- TOC entry 3593 (class 0 OID 0)
-- Dependencies: 233
-- Name: vacancies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vacancies_id_seq', 9, true);


--
-- TOC entry 3374 (class 2606 OID 26197)
-- Name: ai_provider_settings ai_provider_settings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_provider_settings
    ADD CONSTRAINT ai_provider_settings_pkey PRIMARY KEY (id);


--
-- TOC entry 3380 (class 2606 OID 26456)
-- Name: applications applications_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.applications
    ADD CONSTRAINT applications_pkey PRIMARY KEY (id);


--
-- TOC entry 3377 (class 2606 OID 26208)
-- Name: candidate_ai_results candidate_ai_results_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidate_ai_results
    ADD CONSTRAINT candidate_ai_results_pkey PRIMARY KEY (id);


--
-- TOC entry 3382 (class 2606 OID 26458)
-- Name: candidate_documents candidate_documents_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidate_documents
    ADD CONSTRAINT candidate_documents_pkey PRIMARY KEY (id);


--
-- TOC entry 3386 (class 2606 OID 26522)
-- Name: candidate_profiles candidate_profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidate_profiles
    ADD CONSTRAINT candidate_profiles_pkey PRIMARY KEY (id);


--
-- TOC entry 3388 (class 2606 OID 26535)
-- Name: candidates candidates_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidates
    ADD CONSTRAINT candidates_pkey PRIMARY KEY (id);


--
-- TOC entry 3390 (class 2606 OID 26545)
-- Name: chatbot_messages chatbot_messages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_messages
    ADD CONSTRAINT chatbot_messages_pkey PRIMARY KEY (id);


--
-- TOC entry 3384 (class 2606 OID 26466)
-- Name: chatbot_sessions chatbot_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_sessions
    ADD CONSTRAINT chatbot_sessions_pkey PRIMARY KEY (id);


--
-- TOC entry 3392 (class 2606 OID 26554)
-- Name: roles roles_code_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_code_key UNIQUE (code);


--
-- TOC entry 3394 (class 2606 OID 26552)
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- TOC entry 3398 (class 2606 OID 26609)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 3400 (class 2606 OID 26607)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3396 (class 2606 OID 26561)
-- Name: vacancies vacancies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vacancies
    ADD CONSTRAINT vacancies_pkey PRIMARY KEY (id);


--
-- TOC entry 3378 (class 1259 OID 26214)
-- Name: idx_candidate_ai_results_candidate; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_candidate_ai_results_candidate ON public.candidate_ai_results USING btree (candidate_id);


--
-- TOC entry 3375 (class 1259 OID 26198)
-- Name: uq_ai_provider_settings_active; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX uq_ai_provider_settings_active ON public.ai_provider_settings USING btree (is_active) WHERE (is_active = true);


-- Completed on 2026-06-19 21:10:14

--
-- PostgreSQL database dump complete
--

\unrestrict EZG6BhB584TtEYVNjUMNnOrMxNPbOdZ9xdcCSMlv5KqlVNWWjBsnTc5G7xki6MB

