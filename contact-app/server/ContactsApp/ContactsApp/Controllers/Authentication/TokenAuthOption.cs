﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;

namespace ContactsApp.Controllers.Authentication
{
    public class TokenAuthOption
    {
        public static string Audience { get; } = "audience";
        public static string Issuer { get; } = "issuer";
        public static RsaSecurityKey Key { get; } = new RsaSecurityKey(Rsa());
        public static SigningCredentials SigningCredentials { get; } = new SigningCredentials(Key, SecurityAlgorithms.RsaSha256Signature);
        public static TimeSpan ExpiresSpan { get; } = TimeSpan.FromMinutes(1);
        public static string TokenType { get; } = "Bearer";

        private static RSA Rsa()
        {
            using (var rsa = RSA.Create())
            {
                rsa.KeySize = 2048;
                return rsa;
            }
        }
    }
}
