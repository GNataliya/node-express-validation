
const schema = {
	type: 'object',
    properties: {
      clientId: { type: 'string', 
          minLength: 1,
          maxLength: 120,
 },
      firstName: { type: 'string', 
          minLength: 1,
          maxLength: 255,
 },
      lastName: { type: 'string', 
          minLength: 1,
          maxLength: 255,
 },
      email: { type: 'string', 
          //format: "email",
          pattern: '^\\S+@\\S+\\.\\S+$',
          minLength: 1,
          maxLength: 255,
 },
      gender: { type: 'string', 
          minLength: 1,
          maxLength: 6,
 },
      ipAddress: { type: 'string', 
          //format: 'ipv4',
          pattern: '([1-9])|([1-9][8-9])|(1[0-4][0-9])|(2[0-4][8-9])|(25[0-5])\.([1-9])|([1-9][8-9])|(1[0-4][0-9])|(2[0-4][8-9])|(25[0-5])\.([1-9])|([1-9][8-9])|(1[0-4][0-9])|(2[0-4][8-9])|(25[0-5])\.([1-9])|([1-9][8-9])|(1[0-4][0-9])|(2[0-4][8-9])|(25[0-5])',
          minLength: 1,
          maxLength: 15,
 },
   },
   additionalProperties: false,
};

  
  module.exports = {
    schema
  };


// email - имейл
// ip_address - айпи адрес через точку
